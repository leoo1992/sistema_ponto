import { HiPlusCircle } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Input } from "../RegisterAndUpdateUser/subComponents/Input";
import { MdAddHomeWork } from "react-icons/md";
import { useState } from "react";
import {TableSector} from "./subComponents/TableSector";

export default function CreateAndUpdateSector() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<any>();
  const [sectorsList, setSectorsList] = useState<any[]>([]);

  const onSubmit = async () => {
    console.log(sectorsList);
  };

  const handleAddSector = () => {
    const name = watch("name");
    if (name) {
      setSectorsList([...sectorsList, name]);
      reset({ name: "" });
    }
  };

  return (
    <div className="m-4 flex h-5/6 w-11/12 flex-col content-center items-center justify-center self-center rounded-3xl bg-gradient-to-b from-slate-100 via-white to-transparent p-0 align-middle shadow-sm shadow-primary sm:w-11/12 md:w-11/12 lg:w-6/12">
      <form
        className="m-0 flex w-full flex-col p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center font-bold text-primary sm:text-lg">
          Cadastro de setores
        </h1>
        <div
          className={`flex w-full content-center justify-center self-center`}
        >
          <Input
            labelName="Nome"
            classNameInput={`w-full flex justify-between items-center self-center align-middle`}
            Icon={<MdAddHomeWork size={20} />}
            classIcon="flex"
            register={register("name")}
          />
          <div className="m-0 ml-2 flex content-center items-end justify-center p-0">
            <button
              type="button"
              onClick={handleAddSector}
              className="btn btn-circle m-0 flex content-center items-end justify-center bg-white p-0 text-primary shadow-sm shadow-primary"
            >
              <HiPlusCircle size={50} />
            </button>
          </div>
        </div>
        <TableSector sectorsList={sectorsList}/>
        <div className="form-group flex w-full justify-center self-center align-middle">
          <button
            type="submit"
            className={`text-md lg:2/12 btn glass btn-primary mt-8 w-6/12 rounded-badge bg-primary font-extrabold text-white sm:w-4/12 md:w-3/12`}
            disabled={isSubmitting}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
