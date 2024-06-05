import { HiPlusCircle } from "react-icons/hi";
import { FormInput } from "../../UX/Form/FormInput";
import { FaHammer } from "react-icons/fa";
import { TablePosition } from "./subComponents/TablePosition";
import PositionFormEfect from "../../../hooks/Effects/Position/PositionFormEfect";
import usePositionForm from "../../../hooks/Position/usePositionForm";

export default function CreatePosition() {
  const {
    watch,
    register,
    handleSubmit,
    isSubmitting,
    isButtonDisabled,
    handleAddPosition,
    positionsList,
    handleDeletePosition,
    isSaveButtonDisabled,
    onSubmit,
    setIsButtonDisabled,
    setIsSaveButtonDisabled,
  } = usePositionForm();


  return (
    <>
      <PositionFormEfect
        watch={watch}
        setIsButtonDisabled={setIsButtonDisabled}
        setIsSaveButtonDisabled={setIsSaveButtonDisabled}
        positionsList={positionsList}
      />
      <div className="m-4 flex h-5/6 w-11/12 flex-col content-center items-center justify-center self-center rounded-3xl bg-gradient-to-b from-slate-100 via-white to-transparent p-0 align-middle shadow-sm shadow-primary sm:w-11/12 md:w-11/12 lg:w-6/12">
        <form
          className="m-0 flex w-full flex-col p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center font-bold text-primary sm:text-lg">
            Cadastro de cargos
          </h1>
          <div
            className={`flex w-full content-center justify-center self-center`}
          >
            <FormInput
              labelName="Nome"
              classNameInput={`w-full flex justify-between items-center self-center align-middle`}
              Icon={<FaHammer size={20} />}
              classIcon="flex"
              register={register("name")}
            />
            <div className="m-0 ml-2 flex content-center items-end justify-center p-0">
              <button
                type="button"
                onClick={handleAddPosition}
                disabled={isButtonDisabled}
                className="btn btn-circle m-0 flex content-center items-end justify-center bg-white p-0 text-primary shadow-sm shadow-primary"
              >
                <HiPlusCircle size={50} />
              </button>
            </div>
          </div>
          <TablePosition
            positionsList={positionsList}
            onDeletePosition={handleDeletePosition}
          />
          <div className="form-group flex w-full justify-center self-center align-middle">
            <button
              type="submit"
              className={`text-md lg:2/12 btn glass btn-primary mt-8 w-6/12 rounded-badge bg-primary font-extrabold text-white sm:w-4/12 md:w-3/12`}
              disabled={isSubmitting || isSaveButtonDisabled}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
