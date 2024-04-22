import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormLogin } from '../types';
import Cookies from 'js-cookie';
import loginPOST from '../services/Login/loginPOST';

export function useSubmitLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormLogin>();

  const onSubmit: SubmitHandler<FormLogin> = async ({ email, password }) => {
    try {
      const data = await loginPOST({ email, password });
      Cookies.set('AuthToken', data.token, { expires: 1, path: '/' });
      const AuthTokenVerification = Cookies?.get?.('AuthToken');
      if (AuthTokenVerification) {
        navigate('/home');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
