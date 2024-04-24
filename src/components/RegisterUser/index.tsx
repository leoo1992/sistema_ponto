import useNewUser from '../../hooks/useNewUser';
import { submitForm_CreateUser } from '../../utils/submitForm_CreateUser';
import Form from './subComponents/Form';
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
  } = useNewUser();

  return (
    <div
      className="card shrink-0 w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:3/12 shadow-sm bg-gradient-to-b
 from-slate-100 via-white to-white  shadow-primary"
    >
      <Form
        onSubmit={(e: any) =>
          submitForm_CreateUser(
            e,
            NameNewUserRef,
            EmailNewUserRef,
            PasswordNewUserRef,
            TelNewUserRef,
            typeNewUserRef,
            handleSubmit
          )
        }
      >
        <div className="form-control">
          <h1 className="text-primary font-bold text-center text-lg">
            Cadastro
          </h1>
          <Input
            inputRef={NameNewUserRef}
            nameID={'name'}
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
            nameID={'userRole'}
            options={options}
            labelName={'Tipo'}
            register={register}
          />
          <button
            type="submit"
            className="btn btn-primary text-white bg-primary glass rounded-badge font-extrabold text-md shadow-md shadow-gray-300 mt-5"
          >
            Registrar
          </button>
        </div>
      </Form>
    </div>
  );
}
