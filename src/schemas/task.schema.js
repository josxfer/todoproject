import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "El titulo debe ser un texto",
    })
    .min(1)
    .max(255, {
      message: "El titulo debe tener máximo 255 caracteres" 
    }),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un texto",
    })
    .min(1)
    .max(255, {
      message: "La descripción de la tarea debe tener máximo 255 caracteres"
    })
    .optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "El titulo debe ser un texto",
    })
    .min(1)
    .max(255, {
      message: "El titulo debe tener máximo 255 caracteres" 
    }).optional(),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un texto",
    })
    .min(1)
    .max(255, {
      message: "La descripción de la tarea debe tener máximo 255 caracteres"
    })
    .optional(),
});

