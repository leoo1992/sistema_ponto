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
import { Input } from "./Input";
import { Select } from "./Select";
import { ErrorMessage } from "./ErrorMsgs";
import { validarCPF } from "../../../../utils/User/CreateUser/validarCPF";
import { MaskCPF } from "../../../../utils/User/CreateUser/maskCPF";
import { MaskPhone } from "../../../../utils/User/CreateUser/MaskPhone";
import FormTittle from "./FormTittle";
import SubmittBtn from "./SubmittBtn";

export default function UserFormContainer({
  role,
  positions,
  sectors,
  register,
  handleSubmit,
  setValue,
  errors,
  isSubmitting,
  onSubmit,
  state,
  isFormValid,
}: any) {
  return (
    <div
      className="user-form m-4 flex h-5/6 w-11/12 flex-col content-center items-center 
    justify-center self-center rounded-3xl bg-gradient-to-b from-slate-100 via-white
     to-transparent p-0 align-middle shadow-sm shadow-primary sm:w-11/12 md:w-11/12 lg:w-6/12"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-0 flex w-full flex-col p-6"
      >
        <FormTittle state={state} />
        <div
          className={`flex w-full flex-col content-center justify-center self-center`}
        >
          <Input
            labelName="Nome"
            palceholder="Nome *"
            classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.name && "input-error shadow-error"}`}
            Icon={<HiUser size={20} />}
            classIcon="flex"
            register={register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors?.name && <ErrorMessage error={errors.name.message} />}
          <Input
            register={register("email", { pattern: /^\S+@\S+$/i })}
            labelName="Email"
            palceholder="Email *"
            typeInput="email"
            classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.email && "input-error shadow-error"}`}
            Icon={<HiMail size={20} />}
            classIcon="flex"
          />
          {errors?.email && <ErrorMessage error={errors.email.message} />}
          <div className="sm:flex sm:gap-3">
            <div className="w-full">
              <Input
                register={register("telefone", {
                  onChange: (e: any) =>
                    setValue("telefone", MaskPhone(e.target.value)),
                })}
                labelName="Telefone"
                palceholder="Telefone *"
                classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.telefone && "input-error shadow-error"}`}
                Icon={<HiPhone size={20} />}
                classIcon="flex"
              />
              {errors?.telefone && (
                <ErrorMessage error={errors.telefone.message} />
              )}
            </div>
            <div className="w-full">
              <Input
                register={register("cpf", {
                  validate: (value: any) => validarCPF(value),
                  onChange: (e: any) =>
                    setValue("cpf", MaskCPF(e.target.value)),
                })}
                maxLength={14}
                minLength={14}
                labelName="CPF"
                palceholder="CPF *"
                classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.cpf && "input-error shadow-error"}`}
                Icon={<HiIdentification size={20} />}
                classIcon="flex"
              />
              {errors?.cpf && <ErrorMessage error={errors.cpf.message} />}
            </div>
          </div>
          <div className="sm:flex sm:gap-3">
            <div className="w-full">
              <Select
                labelName="Setor"
                state={state}
                options={sectors}
                setValue={setValue}
                register={register("id_sector", {
                  onChange: (e: any) => setValue("id_sector", e.target.value),
                })}
                classNameSelect={`w-full flex justify-between items-center self-center align-middle ${errors?.id_sector && "select-error shadow-error"}`}
                Icon={<HiOfficeBuilding size={20} />}
                classIcon="flex"
              />
              {errors?.id_sector && (
                <ErrorMessage error={errors.id_sector.message} />
              )}
            </div>
            <div className="w-full">
              <Select
                labelName="Cargo"
                state={state}
                options={positions}
                setValue={setValue}
                register={register("id_position", {
                  onChange: (e: any) => setValue("id_position", e.target.value),
                })}
                classNameSelect={`w-full flex justify-between items-center self-center align-middle ${errors?.id_position && "select-error shadow-error"}`}
                Icon={<BsWrench size={20} />}
                classIcon="flex"
              />
              {errors?.id_position && (
                <ErrorMessage error={errors.id_position.message} />
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
                register={register("id_role", {
                  onChange: (e: any) => setValue("id_role", e.target.value),
                })}
                classNameSelect={`w-full flex justify-between items-center self-center align-middle ${errors?.id_role && "select-error shadow-error"}`}
                Icon={<HiKey size={20} />}
                classIcon="flex"
              />
              {errors?.id_role && (
                <ErrorMessage error={errors.id_role.message} />
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
                    classNameInput={` w-full flex justify-between items-center self-center align-middle ${errors?.password && "input-error shadow-error"}`}
                    Icon={<HiLockClosed size={20} />}
                    classIcon={`flex `}
                  />
                  {errors?.password && (
                    <ErrorMessage error={errors.password.message} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <SubmittBtn
          isSubmitting={isSubmitting}
          isFormValid={isFormValid}
          state={state}
        />
      </form>
    </div>
  );
}
