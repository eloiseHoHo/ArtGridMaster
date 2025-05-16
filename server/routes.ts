import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { imageProcessor } from "./imageProcessor";
import { insertImageSchema, type TransformationType } from "@shared/schema";
import { z } from "zod";

// Create upload directory if it doesn't exist
const uploadDir = path.join(process.cwd(), "uploads");
const transformedDir = path.join(uploadDir, "transformed");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(transformedDir)) {
  fs.mkdirSync(transformedDir, { recursive: true });
}

// Configure multer for file uploads
const storage_config = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage_config,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only JPEG, JPG, and PNG files are supported"));
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use("/uploads", (req, res, next) => {
    // Basic security check - ensure path doesn't go outside uploads directory
    if (req.url.includes("..")) {
      return res.status(403).send("Forbidden");
    }
    next();
  }, express.static(uploadDir));
  
  // Upload image endpoint
  app.post("/api/images/upload", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      
      const image = {
        userId: null, // Anonymous user for now
        originalFilename: req.file.originalname,
        originalPath: `/uploads/${req.file.filename}`,
        transformedPath: null,
        transformationType: null,
        transformationSettings: null,
        isPublic: false,
        createdAt: new Date().toISOString(),
      };
      
      const savedImage = await storage.saveImage(image);
      res.status(201).json(savedImage);
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ message: "Failed to upload image" });
    }
  });
  
  // Transform image endpoint
  app.post("/api/images/:id/transform", async (req, res) => {
    try {
      const imageId = parseInt(req.params.id);
      const schema = z.object({
        transformationType: z.enum(["grid", "lineart", "sketch"]),
        settings: z.record(z.any())
      });
      
      const { transformationType, settings } = schema.parse(req.body);
      
      const image = await storage.getImage(imageId);
      if (!image) {
        return res.status(404).json({ message: "Image not found" });
      }
      
      const originalPath = path.join(process.cwd(), image.originalPath.slice(1));
      const outputFilename = `${path.parse(originalPath).name}-${transformationType}-${Date.now()}.png`;
      const outputPath = path.join(transformedDir, outputFilename);
      const relativePath = `/uploads/transformed/${outputFilename}`;
      
      await imageProcessor.transformImage(
        originalPath,
        outputPath,
        transformationType as TransformationType,
        settings
      );
      
      const updatedImage = await storage.updateImageTransformation(
        imageId,
        transformationType as TransformationType,
        relativePath,
        settings
      );
      
      res.json(updatedImage);
    } catch (error) {
      console.error("Error transforming image:", error);
      res.status(500).json({ message: "Failed to transform image" });
    }
  });
  
  // Get image by ID
  app.get("/api/images/:id", async (req, res) => {
    try {
      const imageId = parseInt(req.params.id);
      const image = await storage.getImage(imageId);
      
      if (!image) {
        return res.status(404).json({ message: "Image not found" });
      }
      
      res.json(image);
    } catch (error) {
      console.error("Error getting image:", error);
      res.status(500).json({ message: "Failed to get image" });
    }
  });
  
  // Get recent public images for gallery
  app.get("/api/images/gallery", async (req, res) => {
    try {
      const images = await storage.getPublicImages(12);
      res.json(images);
    } catch (error) {
      console.error("Error getting gallery images:", error);
      res.status(500).json({ message: "Failed to get gallery images" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import express from "express";
