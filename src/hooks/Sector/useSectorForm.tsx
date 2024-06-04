import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../components/UX/Toasts/ToastError";
import CreateSector from "../../services/Sector/CreateSector";

export default function useSectorForm() {
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
    CreateSector(sectorsList, navigate);
    setSectorsList([]);
  };

  const handleAddSector = () => {
    const name = watch("name");
    if (name && sectorsList.length < 10) {
      setSectorsList([...sectorsList, { name: name }]);
      reset({ name: "" });
      focusInputName();
    } else {
      notifyError({ text: "Limite de adições exedido" });
    }
  };

  const handleDeleteSector = (index: any) => {
    const newList = [...sectorsList];
    newList.splice(index, 1);
    setSectorsList(newList);
    focusInputName();
  };

  const focusInputName = () => {
    const inputName = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;
    if (inputName) {
      inputName?.focus();
    }
  };

  return {
    watch,
    register,
    handleSubmit,
    isSubmitting,
    isButtonDisabled,
    handleAddSector,
    sectorsList,
    handleDeleteSector,
    isSaveButtonDisabled,
    onSubmit,
    setIsButtonDisabled,
    setIsSaveButtonDisabled,
  };
}
