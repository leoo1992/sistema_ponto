import { SubmitHandler, useForm } from 'react-hook-form';
import {FormData} from "../types";


export function useSubmit() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (!data || !data.user || ! data.pass) {
            return
        }

        if (data.pass.length < 11 || data.pass.includes(' ')) {
            alert('senha deve ter 11 digitos');
            return
        }

        console.log(data);

        window.location.href = '/home';
    };

  return {
    onSubmit,
    register,
    handleSubmit
  }
}
