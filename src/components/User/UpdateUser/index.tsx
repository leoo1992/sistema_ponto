import { useState, useEffect } from 'react';
import { BsWrench } from 'react-icons/bs';
import { HiIdentification, HiKey, HiMail, HiOfficeBuilding, HiPhone, HiUser } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorFormMsgs } from '../../../components/UX/Form/ErrorFormMsgs';
import { FormInput } from '../../../components/UX/Form/FormInput';
import { FormSelect } from '../../../components/UX/Form/FormSelect';
import FormTittle from '../../../components/UX/Form/FormTittle';
import SubmittFormBtn from '../../../components/UX/Form/SubmittFormBtn';
import { createUserFormSchemaWithoutPassword } from '../../../hooks/User/zodUserValidations';
import { MaskPhone } from '../../../utils/User/CreateUser/MaskPhone';
import { MaskCPF } from '../../../utils/User/CreateUser/maskCPF';
import { validarCPF } from '../../../utils/User/CreateUser/validarCPF';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import UserEdit from "../../../services/User/UserEdit";
import getRole from '../../../services/Role/getRole';
import PositionListALLGET from '../../../services/Position/PositionListALLGET';
import SectorListAllGET from '../../../services/Sector/SectorListAllGET';
import GetUserById from '../../../services/User/GetUserById';

export default function UpdateUser() {
  const { id } = useParams();
  const [role, setRole] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [sectors, setSectors] = useState<any[]>([]);
  const navigate = useNavigate();
  const createUserFormSchema = createUserFormSchemaWithoutPassword();

  type createUserFormData = z.infer<typeof createUserFormSchema>;

const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async ({
    cpf,
    email,
    name,
    telefone,
    id_position,
    id_sector,
    id_role,
  }: any) => {
      const NewUser = {
        cpf: cpf.replace(/\D/g, ""),
        email,
        name,
        telefone,
        position: id_position,
        sector: id_sector,
        role: id_role,
      };
      await UserEdit(NewUser, navigate);
  };

  const name = watch("name");
  const email = watch("email");
  const telefone = watch("telefone");
  const cpf = watch("cpf");
  // const _id_sector = watch("id_sector");
  // const _id_position = watch("id_position");
  // const _id_role = watch("id_role");

  const isFormValid = name && email && telefone && cpf;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    async function fetchData(id:string|undefined) {
      try {
        const RoleData = await getRole();
        const PositionsData = await PositionListALLGET();
        const SectorsData = await SectorListAllGET();
        const UserData = await GetUserById(id);

        setValue('name', UserData?.name);
        setValue('cpf', UserData?.cpf);
        setValue('email', UserData?.email);
        setValue('telefone', UserData?.telefone);

        const mappedPositions = PositionsData?.map((position: any) => ({
          id: position.id_position,
          name: position.name,
        }));

        const mappedSectors = SectorsData?.map((sector: any) => ({
          id: sector.id_sector,
          name: sector.name,
        }));

        const mappedRole = RoleData?.map((role: any) => ({
          id: role.id_role,
          name: capitalizeFirstLetter(role.name),
        }));

        setPositions(mappedPositions);
        setSectors(mappedSectors);
        setRole(mappedRole);

        setValue('id_position', UserData?.position);
        setValue('id_sector', UserData?.sector);
        setValue('id_role', UserData?.role);
        
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData(id);
  }, []);
  
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
        <FormTittle title='Editar usuário' />
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
          <div className="sm:w-6/12">
                <FormSelect
                classNoLabel="sm:mr-2"
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
          </div>
        </div>
        <SubmittFormBtn
          isSubmitting={isSubmitting}
          isFormValid={isFormValid}
          btnText='Editar'
        />
      </form>
    </div >
  )
}