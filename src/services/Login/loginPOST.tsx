import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default async function loginPOST(email: string, password: string) {
  const navigate = useNavigate();
  const apiUrl = 'https://pontoapi-production.up.railway.app/api/auth/login';

  console.log(email, password);
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
      Cookies.set('AuthToken', data.token, { expires: 1, path: '/' });
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
}
