import Cookies from "js-cookie";

export default async function UserDelete(id: any) {
  const idAsNumber = parseInt(id);
  const DeleteUserURL = import.meta.env.VITE_REACT_APP_DELETE_USER_URL + `${idAsNumber}`;

  try {
    await fetch(DeleteUserURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(idAsNumber),
    });
  } catch (error) {
    throw error;
  }
}
