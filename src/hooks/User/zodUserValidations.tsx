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
    id_sector: z.string().refine(
      (value) => {
        const found = sectors.find((sector) => sector.id === value);
        return !!found;
      },
      { message: "Setor inválido" },
    ),
    id_position: z.string().refine(
      (value) => {
        const found = positions.find((position) => position.id === value);
        return !!found;
      },
      { message: "Cargo inválido" },
    ),
    id_role: z.string().refine(
      (value) => {
        const found = role.find((role) => role.id === value);
        return !!found;
      },
      { message: "Acesso inválido" },
    ),
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
      id_sector: z.string().refine(
        (value) => {
          const found = sectors.find((sector) => sector.id === value);
          return !!found;
        },
        { message: "Setor inválido" },
      ),
      id_position: z.string().refine(
        (value) => {
          const found = positions.find((position) => position.id === value);
          return !!found;
        },
        { message: "Cargo inválido" },
      ),
      id_role: z.string().refine(
        (value) => {
          const found = role.find((role) => role.id === value);
          return !!found;
        },
        { message: "Acesso inválido" },
      ),
      password: z
        .string()
        .min(7, { message: "A senha deve ter pelo menos 7 dígitos" }),
    })
    .required();
