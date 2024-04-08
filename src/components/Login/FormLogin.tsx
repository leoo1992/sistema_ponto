import { useSubmit } from '../../hooks/useSubmit';
import LossPass from './Form/LossPass';
import PassInput from './Form/PassInput';
import UserInput from './Form/UserInput';

export default function FormLogin() {
  const formUse = useSubmit();

  return (
    <div
      className="card shrink-0 max-w-sm shadow-sm bg-gradient-to-b
     from-slate-100 via-white to-white  shadow-primary"
    >
      <form
        className="card-body p-5 sm:p-8 sm:w-96"
        onSubmit={formUse.handleSubmit(formUse.onSubmit)}
      >
        <UserInput register={formUse.register} />
        <PassInput register={formUse.register} />
        <LossPass />
        <div
          className="form-control w-full flex justify-center align-middle 
        self-center content-center"
        >
          <button
            type="submit"
            className="btn btn-primary font-extrabold text-md shadow-md shadow-gray-300"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
