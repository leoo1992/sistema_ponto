import Cookies from "js-cookie";
import { notifySuccess } from "../../components/UX/Toasts/ToastSuccess";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function DisablePosition(id: any) {
  const idAsNumber = parseInt(id);
  const DisablePositionURL =
    import.meta.env.VITE_REACT_APP_DISABLE_POSITION_URL + `${idAsNumber}`;

  try {
    const response = await fetch(DisablePositionURL, {
      method: "POST",
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

    notifySuccess({ text: "Cargo desabilitado com sucesso!" });

  } catch (error) {
    throw error;
  }
}
