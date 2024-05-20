import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function CreatePosition(data : any,
  navigate: any,
) {
  const NewPositionURL = import.meta.env.VITE_REACT_APP_NEW_POSITIONS_URL;
  try {
    const response = await fetch(NewPositionURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      notifySuccess({ text: "Cargos criados" });
      navigate("/home");
    } else {
      notifyError({ text: "Erro ao criar cargos" });
    }
  } catch (error) {
    notifyError({ text: "Erro ao criar cargos" });
  }
}
