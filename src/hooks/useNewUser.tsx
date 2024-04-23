import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { submitForm_CreateUser } from '../utils/submitForm_CreateUser';
// import { useNavigate } from 'react-router-dom';
// import newUserPOST from '../services/RegisterUser/newUserPOST';

export default function useNewUser() {
  const NameNewUserRef = useRef<HTMLInputElement>(null);
  const EmailNewUserRef = useRef<HTMLInputElement>(null);
  const PasswordNewUserRef = useRef<HTMLInputElement>(null);
  const TelNewUserRef = useRef<HTMLInputElement>(null);
  const typeNewUserRef = useRef<HTMLSelectElement>(null);
  const options = [
    { id: 'ADMIN', name: 'Administrador' },
    { id: 'USER_ROLE', name: 'Funcionário' },
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
      handleSubmit
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
  };
}
