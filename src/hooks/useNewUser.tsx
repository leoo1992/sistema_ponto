import { useRef } from "react";
import { useForm } from "react-hook-form";
import { submitForm_CreateUser } from "../utils/CreateUser/submitForm_CreateUser";
// import { useNavigate } from 'react-router-dom';
// import newUserPOST from '../services/RegisterUser/newUserPOST';

export default function useNewUser() {
  const NameNewUserRef = useRef<HTMLInputElement>(null);
  const EmailNewUserRef = useRef<HTMLInputElement>(null);
  const PasswordNewUserRef = useRef<HTMLInputElement>(null);
  const TelNewUserRef = useRef<HTMLInputElement>(null);
  const cpfNewUserRef = useRef<HTMLInputElement>(null);
  const sectorNewUserRef = useRef<HTMLInputElement>(null);
  const PositionNewUserRef = useRef<HTMLInputElement>(null);
  const typeNewUserRef = useRef<HTMLSelectElement>(null);
  const options = [
    { id: "ADMINISTRADOR", name: "Administrador" },
    { id: "COLABORADOR", name: "Colaborador" },
    { id: "GESTOR", name: "Gestor" },
  ];

  //   const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = (e: any) => {
    submitForm_CreateUser(
      e,
      NameNewUserRef,
      EmailNewUserRef,
      PasswordNewUserRef,
      TelNewUserRef,
      typeNewUserRef,
      cpfNewUserRef,
      sectorNewUserRef,
      PositionNewUserRef,
      handleSubmit,
    );
  };

  return {
    NameNewUserRef,
    EmailNewUserRef,
    PasswordNewUserRef,
    TelNewUserRef,
    typeNewUserRef,
    options,
    onSubmit,
    register,
    handleSubmit,
    cpfNewUserRef,
    sectorNewUserRef,
    PositionNewUserRef,
  };
}
