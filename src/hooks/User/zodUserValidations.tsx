import { z } from "zod";

export const createUserFormSchemaWithoutPassword = (
  role: any[],
  positions: any[],
  sectors: any[],
) =>
  z.object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 dígitos" }),
    email: z.string().email({ message: "Email Inválido" }).trim(),
    telefone: z.string().min(15, { message: "Telefone Inválido" }),
    cpf: z.string().min(14, { message: "CPF Inválido" }),
    id_sector:  z.string(),
    id_position: z.string(),
    id_role: z.string(),
    password: z.string().optional(),
  });

export const createUserFormSchemaWithPassword = (
  role: any[],
  positions: any[],
  sectors: any[],
) =>
  z
    .object({
      name: z
        .string()
        .min(3, { message: "O nome deve ter pelo menos 3 dígitos" }),
      email: z.string().email({ message: "Email Inválido" }).trim(),
      telefone: z.string().min(15, { message: "Telefone Inválido" }),
      cpf: z.string().min(14, { message: "CPF Inválido" }),
      id_sector: z.string(),
      id_position: z.string(),
      id_role: z.string(),
      password: z
        .string()
        .min(7, { message: "A senha deve ter pelo menos 7 dígitos" }),
    })
    .required();
