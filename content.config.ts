import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().optional().transform((str) => str ? new Date(str) : undefined),
    heroImage: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
  extensions: ['.md', '.mdoc'], // Add support for .mdoc files
});

export const collections = {
  blog,
};