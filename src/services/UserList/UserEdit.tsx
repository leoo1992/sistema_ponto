import Cookies from "js-cookie";

export default async function UserEdit({
  email,
  password,
  telefone,
  cpf,
  name,
  position,
  userRole,
}: any) {
  const data = { email, password, telefone, cpf, name, position, userRole };
  const EditUserURL = import.meta.env.VITE_REACT_APP_EDIT_USER_URL;

  try {
    await fetch(EditUserURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
}
