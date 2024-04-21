import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from '../types';
import loginPOST from '../services/Login/loginPOST';

export function useSubmit() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    loginPOST(email, password);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
