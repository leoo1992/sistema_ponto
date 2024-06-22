import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../types";
import Cookies from "js-cookie";
import loginPOST from "../../services/Login/loginPOST";
import { notifyError } from "../../components/UX/Toasts/ToastError";

export function useSubmitLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormLogin>();

  const onSubmit: SubmitHandler<FormLogin> = async ({ email, password }) => {
    try {
      const data = await loginPOST({ email, password });
      Cookies.set("AuthToken", data.token, { expires: 1, path: "/" });
      const AuthTokenVerification = Cookies?.get?.("AuthToken");
      if (AuthTokenVerification) {
        navigate("/home");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error) {
        return notifyError({ text: "Erro ao efetuar login" });
      };
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
