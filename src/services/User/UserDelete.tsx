import Cookies from "js-cookie";
import { notifySuccess } from "../../components/UX/Toasts/ToastSuccess";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export default async function UserDelete(id: any, navigate: any) {
  const idAsNumber = parseInt(id);
  const DeleteUserURL =
    import.meta.env.VITE_REACT_APP_DELETE_USER_URL + `${idAsNumber}`;

  try {
    const response = await fetch(DeleteUserURL, {
      method: "DELETE",
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

    notifySuccess({ text: "Usuario deletado com sucesso!" });
    navigate("/userslist");

  } catch (error) {
    throw error;
  }
}
