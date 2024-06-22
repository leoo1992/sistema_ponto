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

      if (data.token) {
        Cookies.set("AuthToken", data.token, { expires: 1, path: "/" });
        return navigate("/home");
      }

      if (data.error) {
        return notifyError({ text: data.message });
      }
    } catch (error) {
      if (error) {
        return notifyError({ text: "Erro ao efetuar login" });
      }
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
