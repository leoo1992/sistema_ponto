import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function newUserPOST(
  { email, password, telefone, cpf, name, role, position, sector }: any,
  navigate: any,
) {

  const NewUserURL = import.meta.env.VITE_REACT_APP_NEW_USER_URL;
  const data = {
    email,
    password,
    telefone,
    cpf,
    name,
    position: {id_position: position},
    sector: {id_sector: sector},
    role: [{id_role: role}],
  };

  try {
    const response = await fetch(NewUserURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      notifySuccess({ text: "Usuário criado" });
      navigate("/home");
    } else {
      notifyError({ text: "Erro ao criar usuário" });
    }
  } catch (error) {
    notifyError({ text: "Erro ao criar usuário" });
  }
}