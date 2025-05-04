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
