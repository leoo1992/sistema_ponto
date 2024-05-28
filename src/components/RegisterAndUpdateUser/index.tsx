import { useUserForm } from "../../hooks/User/useUserForm";
import getRole from "../../services/Role/getRole";
import getPosition from "../../services/Position/getPosition";
import getSector from "../../services/Sector/getSector";
import { MaskCPF } from "../../utils/CreateUser/maskCPF";
import UserFormEffects from "../../hooks/Effects/User/UserFormEffects";
import UserFormContainer from "./subComponents/UserFormContainer";
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
    isFormValid,
  } = useUserForm();

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
        state={state}
        isFormValid={isFormValid}
      />
    </>
  );
}
