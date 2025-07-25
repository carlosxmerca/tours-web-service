import { z } from "zod";

export const TourSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  address: z.string(),
  description: z.string(),
  image: z.string().url(),
  likes: z.number().int().nonnegative(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Tour = z.infer<typeof TourSchema>;

export const PaginatedTourResponseSchema = z.object({
  data: z.array(TourSchema),
  total: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  totalPages: z.number(),
});

export type PaginatedTourResponse = z.infer<typeof PaginatedTourResponseSchema>;
