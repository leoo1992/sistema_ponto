import Cookies from "js-cookie";
import { notifySuccess } from "../../components/UX/Toasts/ToastSuccess";

export default async function loginPOST({
  email,
  password,
}: Readonly<{
  email: string;
  password: string;
}>) {
  const LoginURL = import.meta.env.VITE_REACT_APP_LOGIN_URL;
  Cookies?.remove?.("AuthToken");

  try {
    const response = await fetch(LoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const dataError = await response?.json();
      return dataError;
    }

    const data = await response.json();
    const token = await data.token;
    const roles = await data.roles[0];
    Cookies.set("Bearer", token);
    Cookies.set("role", roles);

    notifySuccess({ text: "Login efetuado com sucesso!" });
    return data;
  } catch (error) {
    return error;
  }
}
