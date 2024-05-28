import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import UserEdit from "../../services/User/UserEdit";
import newUserPOST from "../../services/User/newUserPOST";
import {
  createUserFormSchemaWithoutPassword,
  createUserFormSchemaWithPassword,
} from "./zodUserValidations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUserForm = () => {
  const [role, setRole] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [sectors, setSectors] = useState<any[]>([]);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const createUserFormSchema = state
  ? createUserFormSchemaWithoutPassword(role, positions, sectors)
  : createUserFormSchemaWithPassword(role, positions, sectors);

  type createUserFormData = z.infer<typeof createUserFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
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
  }: any) => {
    if (state) {
      const UpdateUser = {
        cpf: cpf.replace(/\D/g, ""),
        email,
        name,
        telefone,
        position: id_position,
        sector: id_sector,
        role: id_role,
      };

      await UserEdit(UpdateUser, navigate);
    } else {
      const NewUser = {
        cpf: cpf.replace(/\D/g, ""),
        email,
        name,
        telefone,
        password,
        position: id_position,
        sector: id_sector,
        role: id_role,
      };
      await newUserPOST(NewUser, navigate);
    }
  };

  const name = watch("name");
  const email = watch("email");
  const telefone = watch("telefone");
  const cpf = watch("cpf");
  const id_sector = watch("id_sector");
  const id_position = watch("id_position");
  const id_role = watch("id_role");
  const password = watch("password");

  const isFormValid = state
    ? name && email && telefone && cpf && id_sector && id_position && id_role
    : name && email && telefone && cpf && id_sector && id_position && id_role && password;

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
    reset,
    state,
    isFormValid,
  };
};
