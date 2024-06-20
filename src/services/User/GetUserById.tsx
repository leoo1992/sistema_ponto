import Cookies from "js-cookie";

export default async function GetUserById(id:number|string|undefined = 0) {
  const GetUserByIdURL =
    import.meta.env.VITE_REACT_APP_GET_USER_URL + `${id}`;

  try {
    const response = await fetch(GetUserByIdURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
