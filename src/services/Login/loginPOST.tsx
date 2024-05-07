import Cookies from "js-cookie";
import { notifySuccess } from "../../components/Toasts/ToastSuccess";
import { notifyError } from "../../components/Toasts/ToastError";

export default async function loginPOST({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const LoginURL = import.meta.env.VITE_REACT_APP_LOGIN_URL;

  Cookies?.remove?.("AuthToken");

  try {
    const resp = await fetch(LoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await resp.json();

    const token = await data.token;
    Cookies.set("Bearer", token);
    notifySuccess({ text: 'Login efetuado com sucesso!'});
    return data;
  } catch (error) {
    notifyError({ text: 'Login não efetuado' });
  }
}
