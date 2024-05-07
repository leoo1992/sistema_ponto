import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function UserDisable(id: any, navigate: any) {
  const idAsNumber = parseInt(id);
  const DisebleUserURL =
    import.meta.env.VITE_REACT_APP_DISABLE_USER_URL + `${idAsNumber}`;

  try {
    const resp = await fetch(DisebleUserURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(idAsNumber),
    });

    if (resp.ok) {
      notifySuccess({ text: "Usuario desabilitado com sucesso!" });
      navigate("/userslist");
    } else {
      notifyError({ text: "Erro ao desabilitar usuario!" });
    }
  } catch (error) {
    throw error;
  }
}
