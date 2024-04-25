import Cookies from 'js-cookie';

export default async function UserListGET() {
  const UserListGETUrl =
    'https://pontoapi-production.up.railway.app/api/v1/users';

  try {
    const response = await fetch(UserListGETUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('AuthToken')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
