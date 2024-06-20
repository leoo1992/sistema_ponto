import Cookies from "js-cookie";

export default async function GetUserById(id:number = 0) {
  const GetUserByIdURL =
    import.meta.env.VITE_REACT_APP_GET_USER_URL + `?${id}`;

  try {
    const response = await fetch(GetUserByIdURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    const data = await response.json();

    return {
      content: data.content,
      totalElements: data.totalElements,
    };
  } catch (error) {
    throw error;
  }
}
