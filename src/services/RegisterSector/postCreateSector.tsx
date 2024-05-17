import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function postCreateSector(data : any,
  navigate: any,
) {

  const NewSectorURL = import.meta.env.TEST;
  //TODO AQUIIIIII

  try {
    const response = await fetch(NewSectorURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("AuthToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      notifySuccess({ text: "Setores criados" });
      navigate("/home");
    } else {
      notifyError({ text: "Erro ao criar setores" });
    }
  } catch (error) {
    notifyError({ text: "Erro ao criar setores" });
  }
}
