export default async function GetUsers(data: any) {
  const NewUserAPIUrl =
    'https://pontoapi-production.up.railway.app/api/v1/createuser';

  try {
    await fetch(NewUserAPIUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
}
