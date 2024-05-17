import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function UserEdit(
  { email, telefone, cpf, name, permissions, position, sector }: any,
  navigate: any,
) {
  
  const data = {
    email,
    telefone,
    cpf,
    name,
    position,
    sector,
    permissions,
  };
  const EditUserURL = import.meta.env.VITE_REACT_APP_EDIT_USER_URL;
  
  try {
    const response = await fetch(EditUserURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      notifySuccess({ text: "Usuário Atualizado" });
      navigate("/userslist");
    } else {
      notifyError({ text: "Erro ao atualizar usuário" });
    }
  } catch (error) {
    throw error;
  }
}
