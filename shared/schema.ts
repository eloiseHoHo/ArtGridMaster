import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const images = pgTable("images", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  originalFilename: text("original_filename").notNull(),
  originalPath: text("original_path").notNull(),
  transformedPath: text("transformed_path"),
  transformationType: text("transformation_type"),
  transformationSettings: jsonb("transformation_settings"),
  isPublic: boolean("is_public").default(false),
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertImageSchema = createInsertSchema(images).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertImage = z.infer<typeof insertImageSchema>;
export type Image = typeof images.$inferSelect;

export type TransformationType = "grid" | "lineart" | "sketch";

export type GridSettings = {
  size: number;
  opacity: number;
  color: string;
  style: "lines" | "dots" | "dashed";
};

export type LineArtSettings = {
  threshold: number;
  lineThickness: number;
  style: "normal" | "detailed" | "minimal";
};

export type SketchSettings = {
  intensity: number;
  pencilType: "graphite" | "charcoal";
  shadingLevel: number;
};

export type TransformationSettings = GridSettings | LineArtSettings | SketchSettings;
