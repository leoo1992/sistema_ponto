import Cookies from 'js-cookie';

export default async function newUserPOST(data: any) {
  const NewUserAPIUrl =
    'https://pontoapi-production.up.railway.app/api/v1/createuser';

  try {
    await fetch(NewUserAPIUrl, {
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
