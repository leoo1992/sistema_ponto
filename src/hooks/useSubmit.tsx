import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../types';
import Cookies from 'js-cookie';
// import loginPOST from '../services/Login/loginPOST';

export function useSubmit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // envia os dados ao back
    console.log(data);
    // const response = await loginPOST(data.username, data.password);

    //se ja tiver token ele apaga para que faça um refresh
    Cookies?.remove?.('AuthToken');

    //pega a resposta do back
    const Auth = 'token-recebido';
    // const Auth = response.token;
    // const User = response.user;
    //const expirationHour = response.expiration;

    //Seta
    Cookies.set('AuthToken', Auth, { expires: 1, path: '/' });
    //Cookies.set('AuthToken', Auth, { expires: expirationHour, path: '/', sameSite: 'None', secure: true });
    //Cookies.set('User', User, { expires: expirationHour, path: '/', sameSite: 'None', secure: true });

    //Loga na rota privada se tiver o token
    const AuthTokenVerification = Cookies?.get?.('AuthToken');
    if (AuthTokenVerification) {
      navigate('/home');
    } else {
      navigate('/');
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
