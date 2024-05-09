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
import { useEffect } from "react";

export default function index() {
  const {
    NameNewUserRef,
    EmailNewUserRef,
    PasswordNewUserRef,
    TelNewUserRef,
    typeNewUserRef,
    options,
    position,
    sector,
    register,
    userData,
    navigate,
    handleSubmit,
    cpfNewUserRef,
    sectorNewUserRef,
    PositionNewUserRef,
  } = useNewUser();

  useEffect(() => {
    if (
      userData &&
      NameNewUserRef.current &&
      EmailNewUserRef.current &&
      TelNewUserRef.current &&
      cpfNewUserRef.current &&
      sectorNewUserRef.current &&
      PositionNewUserRef.current &&
      typeNewUserRef.current
    ) {
      NameNewUserRef.current.value = userData.name;
      EmailNewUserRef.current.value = userData.email;
      TelNewUserRef.current.value = userData.telefone;
      cpfNewUserRef.current.value = userData.cpf;

      const selectedIndexSectorData = sector.findIndex(
        (sector: any) => sector.name === userData.sector,
      );
      if (selectedIndexSectorData !== -1) {
        sectorNewUserRef.current.selectedIndex =
          sector[selectedIndexSectorData]?.id_sector;
      }

      const selectedIndexPositionData = position.findIndex(
        (pos: any) => pos.name === userData.position,
      );
      if (selectedIndexPositionData !== -1) {
        PositionNewUserRef.current.selectedIndex =
          position[selectedIndexPositionData]?.id_position;
      }

      const selectedIndexUserRoleData = options.findIndex(
        (option: any) => option.name === userData.userRole,
      );
      if (selectedIndexPositionData !== -1) {
        typeNewUserRef.current.selectedIndex =
          options[selectedIndexUserRoleData]?.id_userRole;
      }
    }
  }, [userData, sector, position, options]);

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
            PositionNewUserRef,
            userData,
            navigate,
            handleSubmit,
          )
        }
      >
        <h1 className="text-center font-bold text-primary sm:text-lg">
          {userData ? "Edição de usuário" : "Cadastro de usuários"}
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
            <Select
              selectRef={sectorNewUserRef}
              nameID={"id_sector"}
              labelName={"Setor"}
              options={sector}
              register={register}
              classNameSelect="w-full flex justify-between items-center self-center align-middle"
              Icon={<HiOfficeBuilding size={20} />}
              classIcon="flex"
            />
            <Select
              selectRef={PositionNewUserRef}
              nameID={"id_position"}
              labelName={"Cargo"}
              options={position}
              register={register}
              classNameSelect="w-full flex justify-between items-center self-center align-middle"
              Icon={<BsWrench size={20} />}
              classIcon="flex"
            />
          </div>
          <div className="sm:flex sm:gap-3">
            <Select
              selectRef={typeNewUserRef}
              nameID={"id_userRole"}
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
          {userData ? "Atualizar" : "Cadastrar"}
        </button>
      </Form>
    </div>
  );
}
