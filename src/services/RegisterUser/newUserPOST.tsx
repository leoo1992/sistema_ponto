export default async function newUserPOST(data: any) {
  const NewUserAPIUrl =
    'https://pontoapi-production.up.railway.app/api/register';

  try {
    const resp = await fetch(NewUserAPIUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonResp = await resp.json();
    return jsonResp;
  } catch (error) {
    throw error;
  }
}
