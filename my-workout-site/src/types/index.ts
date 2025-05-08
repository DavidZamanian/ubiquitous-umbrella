export interface Post {
  id: string;
  title: string;
  body: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

declare module "*.module.css";
declare module "*.css";
declare module "*.png";
declare module "*.PNG";
declare module "*.svg";
