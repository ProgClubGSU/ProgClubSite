import { defineCollection, z } from 'astro:content';

const gitpaidCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['career', 'technical', 'networking']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    impact: z.enum(['high', 'multiplier', 'essential']),
    publishDate: z.date().optional(),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = {
  gitpaid: gitpaidCollection,
};