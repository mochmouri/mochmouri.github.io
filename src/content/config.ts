import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    order: z.number(),
    status: z.string().optional(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projects };
