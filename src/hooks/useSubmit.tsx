import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormData } from "../types";

export function useSubmit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    navigate('/home');
  };

  return {
    onSubmit,
    register,
    handleSubmit
  };
}
