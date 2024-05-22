import { HiPlusCircle } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Input } from "../RegisterAndUpdateUser/subComponents/Input";
import { MdAddHomeWork } from "react-icons/md";
import { useState, useEffect } from "react";
import { TableSector } from "./subComponents/TableSector";
import CreateSector from "../../services/Sector/CreateSector";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../Toasts/ToastError";

export default function CreateAndUpdateSector() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<any>();
  const [sectorsList, setSectorsList] = useState<any[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async () => {
    CreateSector({ name: sectorsList[0] }, navigate);
    setSectorsList([]);
  };

  const handleAddSector = () => {
    const name = watch("name");
    if (name && sectorsList.length < 10) {
      setSectorsList([...sectorsList, { name: name }]);
      reset({ name: "" });
      focusInputName();
    } else {
      notifyError({text:'Limite de adições exedido'})
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setIsButtonDisabled(!value.name);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setIsSaveButtonDisabled(sectorsList.length === 0);
  }, [sectorsList]);

  const handleDeleteSector = (index: any) => {
    const newList = [...sectorsList];
    newList.splice(index, 1);
    setSectorsList(newList);
    focusInputName();
  };

  const focusInputName = () => {
    const inputName = document.querySelector('input[name="name"]') as HTMLInputElement;
    if (inputName) {
      inputName?.focus();
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
              disabled={isButtonDisabled}
              className="btn btn-circle m-0 flex content-center items-end justify-center bg-white p-0 text-primary shadow-sm shadow-primary"
            >
              <HiPlusCircle size={50} />
            </button>
          </div>
        </div>
        <TableSector
          sectorsList={sectorsList}
          onDeleteSector={handleDeleteSector}
        />
        <div className="form-group flex w-full justify-center self-center align-middle">
          <button
            id="btn-submit"
            type="submit"
            className={`text-md lg:2/12 btn glass btn-primary mt-8 w-6/12 rounded-badge bg-primary font-extrabold text-white sm:w-4/12 md:w-3/12`}
            disabled={isSubmitting || isSaveButtonDisabled}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
