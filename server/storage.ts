import { users, type User, type InsertUser, type Image, type InsertImage, type TransformationType, type TransformationSettings, images } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Image methods
  getImage(id: number): Promise<Image | undefined>;
  saveImage(image: Omit<InsertImage, "id">): Promise<Image>;
  updateImageTransformation(
    id: number, 
    transformationType: TransformationType, 
    transformedPath: string, 
    settings: TransformationSettings
  ): Promise<Image>;
  getPublicImages(limit: number): Promise<Image[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private images: Map<number, Image>;
  private userIdCounter: number;
  private imageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.images = new Map();
    this.userIdCounter = 1;
    this.imageIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Image methods
  async getImage(id: number): Promise<Image | undefined> {
    return this.images.get(id);
  }
  
  async saveImage(image: Omit<InsertImage, "id">): Promise<Image> {
    const id = this.imageIdCounter++;
    const newImage: Image = { ...image, id };
    this.images.set(id, newImage);
    return newImage;
  }
  
  async updateImageTransformation(
    id: number,
    transformationType: TransformationType,
    transformedPath: string,
    settings: TransformationSettings
  ): Promise<Image> {
    const image = this.images.get(id);
    if (!image) {
      throw new Error(`Image with id ${id} not found`);
    }
    
    const updatedImage: Image = {
      ...image,
      transformationType,
      transformedPath,
      transformationSettings: settings
    };
    
    this.images.set(id, updatedImage);
    return updatedImage;
  }
  
  async getPublicImages(limit: number): Promise<Image[]> {
    return Array.from(this.images.values())
      .filter(image => image.isPublic && image.transformedPath)
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
