import Cookies from "js-cookie";

export default async function UserListGET(page = 0, size = 10) {
  const UserListURL =
    import.meta.env.VITE_REACT_APP_USER_LIST_URL + `page=${page}&size=${size}`;

  try {
    const response = await fetch(UserListURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    const data = await response.json();

    return {
      content: data,
      totalElements: data.totalElements,
    };
  } catch (error) {
    return error;
  }
}
