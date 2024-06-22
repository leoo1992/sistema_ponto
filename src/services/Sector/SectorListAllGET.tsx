import Cookies from "js-cookie";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function SectorListAllGET() {
  const SectorListAllURL = import.meta.env.VITE_REACT_APP_GET_ALLSECTOR_URL;

  try {
    const response = await fetch(SectorListAllURL, {
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
