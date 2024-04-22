import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import newUserPOST from '../services/RegisterUser/newUserPOST';

export default function useNewUser() {
  const NameNewUserRef = useRef(null);
  const EmailNewUserRef = useRef(null);
  const PasswordNewUserRef = useRef(null);
  const TelNewUserRef = useRef(null);
  const typeNewUserRef = useRef<any>(null);
  const options = [
    { id: 1, name: 'Administrador' },
    { id: 2, name: 'Funcionário' },
  ];

  //   const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      //   const response = await newUserPOST(data);
      //
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
