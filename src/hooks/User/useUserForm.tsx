import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import UserEdit from "../../services/User/UserEdit";
import newUserPOST from "../../services/User/newUserPOST";

export const useUserForm = () => {
  const [role, setRole] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [sectors, setSectors] = useState<any[]>([]);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<any>();

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
  };
};
