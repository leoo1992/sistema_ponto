import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CreatePosition from "../../services/Position/CreatePosition";
import { notifyError } from "../../components/Toasts/ToastError";

const usePositionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<any>();
  const [positionsList, setPositionsList] = useState<any[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async () => {
    CreatePosition(positionsList, navigate);
    setPositionsList([]);
  };

  const handleAddPosition = () => {
    const name = watch("name");
    if (name && positionsList.length < 10) {
      setPositionsList([...positionsList, { name: name }]);
      reset({ name: "" });
      focusInputName();
    } else {
      notifyError({ text: "Limite de adições excedido" });
    }
  };

  const handleDeletePosition = (index: any) => {
    const newList = [...positionsList];
    newList.splice(index, 1);
    setPositionsList(newList);
    focusInputName();
  };

  const focusInputName = () => {
    const inputName = document.querySelector('input[name="name"]') as HTMLInputElement;
    if (inputName) {
      inputName.focus();
    }
  };

  return {
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
  };
};

export default usePositionForm;
