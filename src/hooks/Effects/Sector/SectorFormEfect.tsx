import { useEffect } from "react";

export default function SectorFormEfect({
  watch,
  setIsButtonDisabled,
  setIsSaveButtonDisabled,
  sectorsList,
}: any) {
  useEffect(() => {
    const subscription = watch((value: any) => {
      setIsButtonDisabled(!value.name);
    });

    return () => subscription?.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setIsSaveButtonDisabled(sectorsList?.length === 0);
  }, [sectorsList]);
  
  return null;
}
