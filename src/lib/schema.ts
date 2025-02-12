import { z } from 'zod';

export const authorSchema = z.object({
  name: z.string(),
  avatar: z.string(),
});

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const postSchema = z.object({
  id: z.string(),
  author: authorSchema,
  title: z.string(),
  summary: z.string(),
  publishDate: z.string(),
  categories: z.array(categorySchema),
});

export type Post = z.infer<typeof postSchema>;
export type Author = z.infer<typeof authorSchema>;
export type Category = z.infer<typeof categorySchema>;
