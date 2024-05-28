import {
  HiKey,
  HiLockClosed,
  HiOfficeBuilding,
  HiIdentification,
  HiPhone,
  HiMail,
  HiUser,
} from "react-icons/hi";
import { BsWrench } from "react-icons/bs";
import { Input } from "./subComponents/Input";
import { Select } from "./subComponents/Select";
import { ErrorMessage } from "./subComponents/ErrorMsgs";
import getRole from "../../services/Role/getRole";
import getPosition from "../../services/Position/getPosition";
import getSector from "../../services/Sector/getSector";
import { validarCPF } from "../../utils/CreateUser/validarCPF";
import { MaskCPF } from "../../utils/CreateUser/maskCPF";
import { MaskPhone } from "../../utils/CreateUser/MaskPhone";
import { useUserForm } from "../../hooks/User/useUserForm";
import UserFormEffects from "../../hooks/Effects/User/UserFormEffects";

export default function index() {
  const {
    role,
    positions,
    sectors,
    register,
    handleSubmit,
    setValue,
    errors,
    isSubmitting,
    onSubmit,
    setRole,
    setPositions,
    setSectors,
    reset,
    state,
  } = useUserForm();
  
  console.log('RENDER');
  
  return (
    <>
      <UserFormEffects
        getRole={getRole}
        getPosition={getPosition}
        getSector={getSector}
        setPositions={setPositions}
        setSectors={setSectors}
        setRole={setRole}
        state={state}
        MaskCPF={MaskCPF}
        reset={reset}
        setValue={setValue}
      />
      <div className="m-4 flex h-5/6 w-11/12 flex-col content-center items-center justify-center self-center rounded-3xl bg-gradient-to-b from-slate-100 via-white to-transparent p-0 align-middle shadow-sm shadow-primary sm:w-11/12 md:w-11/12 lg:w-6/12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-0  flex w-full flex-col p-6"
        >
          <h1 className="text-center font-bold text-primary sm:text-lg">
            {state ? "Edição de Usuário" : "Cadastro de usuários"}
          </h1>
          <div
            className={`flex w-full flex-col content-center justify-center self-center`}
          >
            <Input
              labelName="Nome"
              palceholder="Nome *"
              classNameInput={`w-full flex justify-between items-center
             self-center align-middle ${errors?.name && "input-error shadow-error"}`}
              Icon={<HiUser size={20} />}
              classIcon="flex"
              register={register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors?.name?.type === "required" && (
              <ErrorMessage>Campo requerido</ErrorMessage>
            )}
            <Input
              register={register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              labelName="Email"
              palceholder="Email *"
              typeInput="email"
              classNameInput={`w-full flex justify-between items-center
             self-center align-middle ${errors?.email && "input-error shadow-error"}`}
              Icon={<HiMail size={20} />}
              classIcon="flex"
            />
            {errors?.email?.type === "required" && (
              <ErrorMessage>Campo requerido</ErrorMessage>
            )}
            {errors?.email?.type === "pattern" && (
              <ErrorMessage>Email Inválido</ErrorMessage>
            )}
            <div className="sm:flex sm:gap-3">
              <div className="w-full">
                <Input
                  register={register("telefone", { required: true,
                    onChange: (e) => {
                      setValue("telefone", MaskPhone(e.target.value));
                    },
                    maxLength: 14,
                    minLength: 13,
                    
                   })}
                  labelName="Telefone"
                  palceholder="Telefone *"
                  classNameInput={`w-full flex justify-between items-center
               self-center align-middle ${errors?.telefone && "input-error shadow-error"}`}
                  Icon={<HiPhone size={20} />}
                  classIcon="flex"
                />
                {errors?.telefone?.type === "required" && (
                  <ErrorMessage>Campo requerido</ErrorMessage>
                )}
              </div>
              <div className="w-full">
                <Input
                  register={register("cpf", {
                    required: true,
                    validate: (value) => validarCPF(value),
                    onChange: (e) => {
                      setValue("cpf", MaskCPF(e.target.value));
                    },
                    maxLength: 14,
                    minLength: 14,
                  })}
                  maxLength={14}
                  minLength={14}
                  labelName="CPF"
                  palceholder="CPF *"
                  classNameInput={`w-full flex justify-between items-center
               self-center align-middle ${errors?.cpf && "input-error shadow-error"}`}
                  Icon={<HiIdentification size={20} />}
                  classIcon="flex"
                />
                {errors?.cpf?.type === "required" && (
                  <ErrorMessage>Campo requerido</ErrorMessage>
                )}
                {errors?.cpf?.type === "validate" && (
                  <ErrorMessage>CPF Inválido</ErrorMessage>
                )}
              </div>
            </div>
            <div className="sm:flex sm:gap-3">
              <div className="w-full">
                <Select
                  labelName="Setor"
                  state={state}
                  options={sectors}
                  setValue={setValue}
                  register={register("id_sector", { required: true,
                    onChange: (e) => {
                      setValue("id_sector", (e.target.value));
                    },
                   })}
                  classNameSelect={`w-full flex justify-between items-center
               self-center align-middle ${errors?.id_sector && "select-error shadow-error"}`}
                  Icon={<HiOfficeBuilding size={20} />}
                  classIcon="flex"
                />
                {errors?.id_sector?.type === "required" && (
                  <ErrorMessage>Campo requerido</ErrorMessage>
                )}
              </div>
              <div className="w-full">
                <Select
                  labelName="Cargo"
                  state={state}
                  options={positions}
                  setValue={setValue}
                  register={register("id_position", { required: true,
                    onChange: (e) => {
                      setValue("id_position", (e.target.value));
                    },
                   })}
                  classNameSelect={`w-full flex justify-between items-center
                self-center align-middle ${errors?.id_position && "select-error shadow-error"}`}
                  Icon={<BsWrench size={20} />}
                  classIcon="flex"
                />
                {errors?.id_position?.type === "required" && (
                  <ErrorMessage>Campo requerido</ErrorMessage>
                )}
              </div>
            </div>
            <div className="sm:flex sm:gap-3">
              <div className="w-full">
                <Select
                  options={role}
                  state={state}
                  setValue={setValue}
                  labelName="Acesso"
                  register={register("id_role", { required: true,
                    onChange: (e) => {
                      setValue("id_role", (e.target.value));
                    },
                   })}
                  classNameSelect={`w-full flex justify-between items-center
                self-center align-middle ${errors?.id_role && "select-error shadow-error"}`}
                  Icon={<HiKey size={20} />}
                  classIcon="flex"
                />
                {errors?.id_role?.type === "required" && (
                  <ErrorMessage>Campo requerido</ErrorMessage>
                )}
              </div>
              <div className="w-full">
                {!state && (
                  <>
                    <Input
                      register={register(
                        "password",
                        state ? {} : { required: true },
                      )}
                      labelName="Senha"
                      palceholder="Senha *"
                      typeInput="password"
                      classNameInput={` w-full flex justify-between items-center
               self-center align-middle ${errors?.password && "input-error shadow-error"}`}
                      Icon={<HiLockClosed size={20} />}
                      classIcon={`flex `}
                    />
                    {errors?.password?.type === "required" && (
                      <ErrorMessage>Campo requerido</ErrorMessage>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="form-group flex w-full justify-center self-center align-middle">
            <button
              className={`text-md lg:2/12 btn glass btn-primary mt-8 w-6/12 
          rounded-badge bg-primary  font-extrabold 
          text-white sm:w-4/12 md:w-3/12`}
              disabled={isSubmitting}
            >
              {state ? "Atualizar" : "Registrar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
