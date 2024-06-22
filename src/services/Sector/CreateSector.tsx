import Cookies from "js-cookie";
import { notifySuccess } from "../../components/UX/Toasts/ToastSuccess";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function CreateSector(data: any, navigate: any) {
  const NewSectorURL = import.meta.env.VITE_REACT_APP_NEW_SECTORS_URL;
  try {
    const response = await fetch(NewSectorURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const dataError = await response?.json();
      return notifyError({ text: dataError?.message });
    }

    notifySuccess({ text: "Setores criados" });
    navigate("/home");
  } catch (error) {
    notifyError({ text: "Erro ao criar setores" });
  }
}
