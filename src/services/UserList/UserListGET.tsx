import Cookies from "js-cookie";

export default async function UserListGET(page = 0, size = 10) {
  const UserList = `https://pontoapi-production.up.railway.app/api/v1/users?page=${page}&size=${size}`;

  try {
    const response = await fetch(UserList, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return {
      content: data.content,
      totalElements: data.totalElements,
    };
  } catch (error) {
    throw error;
  }
}
