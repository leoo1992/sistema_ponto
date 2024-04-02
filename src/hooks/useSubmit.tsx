import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormData } from "../types";

export function useSubmit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // if (!data || !data.user || !data.pass) {
    //     return;
    // }

    // if (data.pass.length < 11 || data.pass.includes(' ')) {
    //     alert('A senha deve ter 11 dígitos');
    //     return;
    // }

    console.log(data);

    navigate('/home');
  };

  return {
    onSubmit,
    register,
    handleSubmit
  };
}
