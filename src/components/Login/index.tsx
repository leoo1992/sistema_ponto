import { useSubmitLogin } from "../../hooks/useSubmitLogin";
import LossPass from "./subComponents/LossPass";
import PassInput from "./subComponents/PassInput";
import UserInput from "./subComponents/UserInput";

export default function FormLogin() {
  const formUse = useSubmitLogin();

  return (
    <div
      className="card max-w-sm shrink-0 bg-gradient-to-b from-slate-100
     via-white to-white shadow-sm  shadow-primary"
    >
      <form
        className="card-body p-5 sm:w-96 sm:p-8"
        onSubmit={formUse.handleSubmit(formUse.onSubmit)}
      >
        <UserInput register={formUse.register} />
        <PassInput register={formUse.register} />
        <LossPass />
        <div
          className="form-control flex w-full content-center justify-center 
        self-center align-middle"
        >
          <button
            type="submit"
            className="text-md btn glass btn-primary rounded-badge bg-primary font-extrabold text-white shadow-md shadow-gray-300"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
