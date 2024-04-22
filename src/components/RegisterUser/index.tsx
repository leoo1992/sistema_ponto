import useNewUser from '../../hooks/useNewUser';
import Input from './subComponents/Input';
import Select from './subComponents/Select';

export default function index() {
  const {
    NameNewUserRef,
    EmailNewUserRef,
    PasswordNewUserRef,
    TelNewUserRef,
    typeNewUserRef,
    options,
    register,
    handleSubmit,
    onSubmit,
  } = useNewUser();

  return (
    <div
      className="card shrink-0 w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:3/12 shadow-sm bg-gradient-to-b
 from-slate-100 via-white to-white  shadow-primary"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body p-5 sm:p-8 w-full"
      >
        <div className="form-control">
          <h1 className="text-primary font-bold text-center text-lg">
            Cadastro
          </h1>
          <Input
            inputRef={NameNewUserRef}
            nameID={'nome'}
            labelName={'Nome'}
            register={register}
          />
          <Input
            inputRef={EmailNewUserRef}
            nameID={'email'}
            labelName={'Email'}
            typeInput="email"
            register={register}
          />
          <Input
            inputRef={PasswordNewUserRef}
            nameID={'password'}
            labelName={'Senha'}
            typeInput="password"
            register={register}
          />
          <Input
            inputRef={TelNewUserRef}
            nameID={'telefone'}
            labelName={'Telefone'}
            register={register}
          />
          <Select
            selectRef={typeNewUserRef}
            nameID={'tipo'}
            options={options}
            labelName={'Tipo'}
            register={register}
          />
          <button type="submit" className="btn btn-primary mt-5">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
