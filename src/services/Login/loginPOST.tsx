import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default async function loginPOST({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const navigate = useNavigate();
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
