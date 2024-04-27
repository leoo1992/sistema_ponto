import Cookies from 'js-cookie';

export default async function UserListGET(rowsPerPage = 10, page = 1) {
  const UserListGETUrl =
    `https://pontoapi-production.up.railway.app/api/v1/users?page=${rowsPerPage}&size=${page}`;

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

    const data = await response.json();
    const totalCountHeader = response.headers.get('total');
    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

    return { data: data, total: total };
  } catch (error) {
    throw error;
  }
}
