import { useUserForm } from "../../../hooks/User/useUserForm";
import UserFormEffects from "../../../hooks/Effects/User/UserFormEffects";
import UserFormContainer from "./subComponents/UserFormContainer";

export default function CreateUser() {
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
    isFormValid,
  } = useUserForm();

  return (
    <>
      <UserFormEffects
        setPositions={setPositions}
        setSectors={setSectors}
        setRole={setRole}
      />
      <UserFormContainer
        role={role}
        positions={positions}
        sectors={sectors}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        errors={errors}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </>
  );
}
