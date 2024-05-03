import useNewUser from '../../hooks/useNewUser';
import { submitForm_CreateUser } from '../../utils/CreateUser/submitForm_CreateUser';
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
      className="card w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:7/12 shadow-sm bg-gradient-to-b
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
        <h1 className="text-primary font-bold text-center text-lg">Cadastro</h1>
        <div className="form-control flex flex-col sm:flex-row">
          <div className="flex-1 justify-between align-middle 
          items-center self-center content-center p-1" >
            <Input
              inputRef={NameNewUserRef}
              nameID={'name'}
              labelName={'Nome'}
              register={register}
              classNameInput='w-full flex justify-between items-center self-center align-middle'
            />
            <Input
              inputRef={EmailNewUserRef}
              nameID={'cargo'}
              labelName={'Cargo'}
              typeInput="text"
              register={register}
              classNameInput='w-full flex justify-between items-center self-center align-middle'
            />
            <Select
              selectRef={typeNewUserRef}
              nameID={'userRole'}
              options={options}
              labelName={'Tipo'}
              register={register}
              classNameSelect='w-full flex justify-between items-center self-center align-middle'
            />
          </div>
          <div className="flex-1 justify-between align-middle 
          items-center self-center content-center p-1" >
            <Input
              inputRef={EmailNewUserRef}
              nameID={'email'}
              labelName={'Email'}
              typeInput="email"
              register={register}
              classNameInput='w-full flex justify-between items-center self-center align-middle'
            />
            <Input
              inputRef={TelNewUserRef}
              nameID={'telefone'}
              labelName={'Telefone'}
              register={register}
              classNameInput='w-full flex justify-between items-center self-center align-middle'
            />
            <Input
              inputRef={PasswordNewUserRef}
              nameID={'password'}
              labelName={'Senha'}
              typeInput="password"
              register={register}
              classNameInput='w-full flex justify-between items-center self-center align-middle'
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary text-white bg-primary glass rounded-badge font-extrabold text-md shadow-md shadow-gray-300 mt-5"
        >
          Registrar
        </button>
      </Form>
    </div>
  );
}
