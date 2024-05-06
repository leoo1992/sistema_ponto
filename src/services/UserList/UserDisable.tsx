import Cookies from 'js-cookie';

export default async function UserDisable(id: any) {
  const idAsNumber = parseInt(id, 10);
  const NewUserAPIUrl = `https://pontoapi-production.up.railway.app/api/v1/disable/${idAsNumber}`;

  try {
    await fetch(NewUserAPIUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('AuthToken')}`,
      },
      body: JSON.stringify(idAsNumber),
    });
  } catch (error) {
    throw error;
  }
}
