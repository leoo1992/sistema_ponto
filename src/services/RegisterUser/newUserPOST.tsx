import Cookies from 'js-cookie';

export default async function newUserPOST(data: any) {
  const NewUserURL = import.meta.env.VITE_REACT_APP_NEW_USER_URL;
console.log(NewUserURL);

  try {
    await fetch(NewUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('AuthToken')}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
}
