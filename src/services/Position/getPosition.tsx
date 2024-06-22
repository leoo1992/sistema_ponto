import Cookies from "js-cookie";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function getPosition() {
  const getPositionURL = import.meta.env.VITE_REACT_APP_GET_POSITION_URL;

  try {
    const response = await fetch(getPositionURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
    });

    if (!response.ok) {
      const dataError = await response?.json();
      return notifyError({ text: dataError?.message });
    }

    const data = await response.json();
    return data;
  } catch (error) {
   throw error;
  }
}
