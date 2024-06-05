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
import { FormInput } from "../../../UX/Form/FormInput";
import { FormSelect } from "../../../UX/Form/FormSelect";
import { ErrorFormMsgs } from "../../../UX/Form/ErrorFormMsgs";
import { validarCPF } from "../../../../utils/User/CreateUser/validarCPF";
import { MaskCPF } from "../../../../utils/User/CreateUser/maskCPF";
import { MaskPhone } from "../../../../utils/User/CreateUser/MaskPhone";
import FormTittle from "../../../UX/Form/FormTittle";
import SubmittFormBtn from "../../../UX/Form/SubmittFormBtn";

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
        <FormTittle title='Cadastro de usuários' />
        <div
          className={`flex w-full flex-col content-center justify-center self-center`}
        >
          <FormInput
            labelName="Nome"
            palceholder="Nome *"
            classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.name && "input-error shadow-error"}`}
            Icon={<HiUser size={20} />}
            classIcon="flex"
            register={register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors?.name && <ErrorFormMsgs error={errors.name.message} />}
          <FormInput
            register={register("email", { pattern: /^\S+@\S+$/i })}
            labelName="Email"
            palceholder="Email *"
            typeInput="email"
            classNameInput={`w-full flex justify-between items-center self-center align-middle ${errors?.email && "input-error shadow-error"}`}
            Icon={<HiMail size={20} />}
            classIcon="flex"
          />
          {errors?.email && <ErrorFormMsgs error={errors.email.message} />}
          <div className="sm:flex sm:gap-3">
            <div className="w-full">
              <FormInput
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
                <ErrorFormMsgs error={errors.telefone.message} />
              )}
            </div>
            <div className="w-full">
              <FormInput
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
              {errors?.cpf && <ErrorFormMsgs error={errors.cpf.message} />}
            </div>
          </div>
          <div className="sm:flex sm:gap-3">
            <div className="w-full">
              <FormSelect
                labelName="Setor"
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
                <ErrorFormMsgs error={errors.id_sector.message} />
              )}
            </div>
            <div className="w-full">
              <FormSelect
                labelName="Cargo"
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
                <ErrorFormMsgs error={errors.id_position.message} />
              )}
            </div>
          </div>
          <div className="sm:flex sm:gap-3">
            <div className="w-full">
              <FormSelect
                options={role}
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
                <ErrorFormMsgs error={errors.id_role.message} />
              )}
            </div>
            <div className="w-full">
                  <FormInput
                    register={register(
                      "password",
                      { required: true },
                    )}
                    labelName="Senha"
                    palceholder="Senha *"
                    typeInput="password"
                    classNameInput={` w-full flex justify-between items-center self-center align-middle ${errors?.password && "input-error shadow-error"}`}
                    Icon={<HiLockClosed size={20} />}
                    classIcon={`flex `}
                  />
                  {errors?.password && (
                    <ErrorFormMsgs error={errors.password.message} />
                  )}
            </div>
          </div>
        </div>
        <SubmittFormBtn
          isSubmitting={isSubmitting}
          isFormValid={isFormValid}
          btnText='Cadastrar'
        />
      </form>
    </div>
  );
}
