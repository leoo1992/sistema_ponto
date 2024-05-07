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
