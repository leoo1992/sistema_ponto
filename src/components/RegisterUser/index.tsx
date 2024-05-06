import { HiKey } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { BsWrench } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import useNewUser from "../../hooks/useNewUser";
import { submitForm_CreateUser } from "../../utils/CreateUser/submitForm_CreateUser";
import Form from "./subComponents/Form";
import Input from "./subComponents/Input";
import Select from "./subComponents/Select";

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
      className="xl:4/12 card flex w-11/12 flex-col content-center items-center justify-center
 self-center bg-gradient-to-b from-slate-100 via-white to-transparent align-middle shadow-sm shadow-primary 
 sm:w-11/12 md:w-10/12 lg:w-6/12"
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
        <h1 className="text-center font-bold text-primary sm:text-lg">
          Cadastro de usuários
        </h1>
        <div className="form-control flex w-full content-center justify-center self-center">
          <Input
            inputRef={NameNewUserRef}
            nameID={"name"}
            labelName={"Nome"}
            register={register}
            classNameInput="w-full flex justify-between items-center self-center align-middle"
            Icon={<HiUser size={20} />}
            classIcon="flex"
          />
          <Input
            inputRef={EmailNewUserRef}
            nameID={"email"}
            labelName={"Email"}
            typeInput="email"
            register={register}
            classNameInput="w-full flex justify-between items-center self-center align-middle"
            Icon={<HiMail size={20} />}
            classIcon="flex"
          />
          <div className="sm:flex sm:gap-3">
            <Input
              inputRef={TelNewUserRef}
              nameID={"telefone"}
              labelName={"Telefone"}
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiPhone size={20} />}
              classIcon="flex"
            />
            <Input
              inputRef={cpfNewUserRef}
              nameID={"cpf"}
              labelName={"CPF"}
              typeInput="text"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiIdentification size={20} />}
              classIcon="flex"
            />
          </div>
          <div className="sm:flex sm:gap-3">
            <Input
              inputRef={sectorNewUserRef}
              nameID={"setor"}
              labelName={"Setor"}
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiOfficeBuilding size={20} />}
              classIcon="flex"
            />
            <Input
              inputRef={jobFunctionNewUserRef}
              nameID={"cargo"}
              labelName={"Cargo"}
              typeInput="text"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<BsWrench size={20} />}
              classIcon="flex"
            />
          </div>
          <div className="sm:flex sm:gap-3">
            <Select
              selectRef={typeNewUserRef}
              nameID={"userRole"}
              options={options}
              labelName={"Acesso"}
              register={register}
              classNameSelect="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiKey size={20} />}
              classIcon="flex"
            />
            <Input
              inputRef={PasswordNewUserRef}
              nameID={"password"}
              labelName={"Senha"}
              typeInput="password"
              register={register}
              classNameInput="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiLockClosed size={20} />}
              classIcon="flex"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-md lg:2/12 btn glass btn-primary mt-8 
          flex w-6/12 justify-center self-center rounded-badge bg-primary align-middle
          font-extrabold text-white  sm:w-4/12 md:w-3/12"
        >
          Registrar
        </button>
      </Form>
    </div>
  );
}
