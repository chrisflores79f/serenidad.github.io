import { defineCollection, z } from "astro:content";

const productos = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    categoria: z.enum(["velas", "jabones", "ropa"]),
    precio: z.number(),
    imagen: z.string(),
    destacado: z.boolean().default(false),
    disponible: z.boolean().default(true),
    descripcion_corta: z.string()
  })
});

export const collections = {
  productos
};
