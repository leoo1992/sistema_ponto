import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../types';
import Cookies from 'js-cookie';
// import loginPOST from '../services/Login/loginPOST';

export function useSubmit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    const apiUrl = 'https://pontoapi-production.up.railway.app/api/auth/login';

    Cookies?.remove?.('AuthToken');

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        Cookies.set('AuthToken', data, { expires: 1, path: '/' });
        const AuthTokenVerification = Cookies?.get?.('AuthToken');
        if (AuthTokenVerification) {
          navigate('/home');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
