
import { useEffect } from "react";

export default function PositionFormEfect({watch, setIsButtonDisabled, setIsSaveButtonDisabled, positionsList}: any) {
  useEffect(() => {
    const subscription = watch((value: any) => {
      setIsButtonDisabled(!value.name);
    });

    return () => subscription?.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setIsSaveButtonDisabled(positionsList?.length === 0);
  }, [positionsList]);
  return null;
}
