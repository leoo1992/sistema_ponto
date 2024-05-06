import Cookies from "js-cookie";

export default async function UserEdit(id: any) {
  const idAsNumber = parseInt(id);
  const EditUserURL = import.meta.env.VITE_REACT_APP_EDIT_USER_URL + `${idAsNumber}`;

  try {
    await fetch(EditUserURL, {
      method: "PUT",
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
