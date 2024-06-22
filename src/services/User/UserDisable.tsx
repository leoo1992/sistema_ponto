import Cookies from "js-cookie";
import { notifySuccess } from "../../components/UX/Toasts/ToastSuccess";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function UserDisable(id: any, navigate: any) {
  const idAsNumber = parseInt(id);
  const DisebleUserURL =
    import.meta.env.VITE_REACT_APP_DISABLE_USER_URL + `${idAsNumber}`;

  try {
    const response = await fetch(DisebleUserURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(idAsNumber),
    });

    if (!response.ok) {
      const dataError = await response?.json();
      return notifyError({ text: dataError?.message });
    }

    notifySuccess({ text: "Usuario desabilitado com sucesso!" });
    navigate("/userslist");
  } catch (error) {
    throw error;
  }
}
