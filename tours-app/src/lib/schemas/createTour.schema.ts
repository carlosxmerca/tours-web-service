import { z } from 'zod';

export const CreateTourSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'El nombre es requerido' })
    .max(100, { message: 'Máximo 100 caracteres' }),

  address: z
    .string()
    .min(1, { message: 'La dirección es requerida' })
    .max(300, { message: 'Máximo 300 caracteres' }),

  description: z
    .string()
    .min(1, { message: 'La descripción es requerida' })
    .max(4000, { message: 'Máximo 4000 caracteres' }),

  image: z
    .string()
    .url({ message: 'Debe ser una URL válida' })
    .max(300, { message: 'Máximo 300 caracteres' }),
});

export type CreateTourDto = z.infer<typeof CreateTourSchema>;
