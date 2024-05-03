import { HiKey } from "react-icons/hi"; 
import { HiLockClosed } from "react-icons/hi"; 
import { BsWrench } from "react-icons/bs";  
import { HiOfficeBuilding } from "react-icons/hi"; 
import { HiIdentification } from "react-icons/hi"; 
import { HiPhone } from "react-icons/hi"; 
import { HiMail } from "react-icons/hi"; 
import { HiUser } from "react-icons/hi"; 
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
    cpfNewUserRef,
    sectorNewUserRef,
    jobFunctionNewUserRef,
  } = useNewUser();

  return (
    <div
      className="card w-11/12 sm:w-11/12 md:w-10/12 lg:w-6/12 xl:4/12 shadow-sm bg-gradient-to-b
 from-slate-100 via-white to-transparent shadow-primary flex flex-col justify-center items-center 
 content-center align-middle self-center"
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
            cpfNewUserRef,
            sectorNewUserRef,
            jobFunctionNewUserRef,
            handleSubmit,
          )
        }
      >
        <h1 className="text-primary font-bold text-center sm:text-lg">
          Cadastro de usuários
        </h1>
        <div className="form-control flex w-full justify-center self-center content-center">
          <Input
            inputRef={NameNewUserRef}
            nameID={'name'}
            labelName={'Nome'}
            register={register}
            classNameInput="w-full flex justify-between items-center self-center align-middle"
            Icon={<HiUser size={20}/>}
            classIcon="flex"
          />
          <Input
            inputRef={EmailNewUserRef}
            nameID={'email'}
            labelName={'Email'}
            typeInput="email"
            register={register}
            classNameInput="w-full flex justify-between items-center self-center align-middle"
            Icon={<HiMail size={20}/>}
            classIcon="flex"
          />
          <div className="sm:flex sm:gap-3">
            <Input
              inputRef={TelNewUserRef}
              nameID={'telefone'}
              labelName={'Telefone'}
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiPhone size={20} />}
              classIcon="flex"
            />
            <Input
              inputRef={cpfNewUserRef}
              nameID={'cpf'}
              labelName={'CPF'}
              typeInput="text"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiIdentification size={20}/>}
              classIcon="flex"
            />
          </div>
          <div className="sm:flex sm:gap-3">
            <Input
              inputRef={sectorNewUserRef}
              nameID={'setor'}
              labelName={'Setor'}
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiOfficeBuilding size={20}/>}
              classIcon="flex"
            />
            <Input
              inputRef={jobFunctionNewUserRef}
              nameID={'cargo'}
              labelName={'Cargo'}
              typeInput="text"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<BsWrench size={20}/>}
              classIcon="flex"
            />
          </div>
          <div className="sm:flex sm:gap-3">
            <Select
              selectRef={typeNewUserRef}
              nameID={'userRole'}
              options={options}
              labelName={'Acesso'}
              register={register}
              classNameSelect="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiKey size={20}/>}
              classIcon="flex"
           />
            <Input
              inputRef={PasswordNewUserRef}
              nameID={'password'}
              labelName={'Senha'}
              typeInput="password"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiLockClosed size={20}/>}
              classIcon="flex"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary text-white bg-primary glass rounded-badge 
          text-md mt-8 w-6/12 sm:w-4/12 flex justify-center align-middle
          self-center font-extrabold  md:w-3/12 lg:2/12" 
        >
          Registrar
        </button>
      </Form>
    </div>
  );
}
