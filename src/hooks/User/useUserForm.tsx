import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import newUserPOST from "../../services/User/newUserPOST";
import { createUserFormSchemaWithPassword } from "./zodUserValidations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUserForm = () => {
  const [role, setRole] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [sectors, setSectors] = useState<any[]>([]);
  const navigate = useNavigate();
  const createUserFormSchema = createUserFormSchemaWithPassword();
  type createUserFormData = z.infer<typeof createUserFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  

  const onSubmit = async ({
    cpf,
    email,
    name,
    telefone,
    password,
    id_position,
    id_sector,
    id_role,
  }: any) =>
  {
    const positionId = positions.find(position => position.name === id_position)?.id || null;
    const sectorId = sectors.find(sector => sector.name === id_sector)?.id || null;
    const roleId = role.find(itemRole => itemRole.name === id_role)?.id || null;

      const NewUser = {
        cpf: cpf.replace(/\D/g, ""),
        email,
        name,
        telefone,
        password,
        position: await positionId,
        sector: await sectorId,
        role: await roleId,
    };
    
    debugger;
      await newUserPOST(NewUser, navigate);
  };

  const name = watch("name");
  const email = watch("email");
  const telefone = watch("telefone");
  const cpf = watch("cpf");
  const id_sector = watch("id_sector");
  const id_position = watch("id_position");
  const id_role = watch("id_role");
  const password = watch("password");

  const isFormValid = name && email && telefone && cpf && id_sector && id_position && id_role && password;

  return {
    role,
    positions,
    sectors,
    register,
    handleSubmit,
    setValue,
    errors,
    isSubmitting,
    onSubmit,
    setRole,
    setPositions,
    setSectors,
    isFormValid,
  };
};