import { useEffect } from "react";

export default function UserFormEffects({
  getRole,
  getPosition,
  getSector,
  setPositions,
  setSectors,
  setRole,
  state,
  MaskCPF,
  reset,
  setValue
}: any) {
  useEffect(() => {
    async function fetchData() {
      try {
        const RoleData = await getRole();
        const PositionsData = await getPosition();
        const SectorsData = await getSector();

        const mappedPositions = await PositionsData?.content?.map((position: any) => ({
          id: position.id_position,
          name: position.name,
        })) || await PositionsData?.map((position: any) => ({
          id: position.id_position,
          name: position.name,
        }))

        const mappedSectors = await SectorsData?.content?.map((sector: any) => ({
          id: sector.id_sector,
          name: sector.name,
        })) || await SectorsData?.content?.map((sector: any) => ({
          id: sector.id_sector,
          name: sector.name,
        }))

        const mappedRole = await RoleData?.map((role: any) => ({
          id: role.id_role,
          name: role.name,
        }));

        setPositions(mappedPositions);
        setSectors(mappedSectors);
        setRole(mappedRole);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        if (state) {
          const {
            name,
            email,
            cpf,
            position,
            sector,
            telefone,
            permissions,
          }: any = state;

          const cpfAdjuted = MaskCPF(cpf);

          reset({
            name,
            email,
            cpf: cpfAdjuted,
            telefone,
            id_sector: sector.name,
            id_position: position.name,
            id_role: permissions[0].name,
          });

          setValue("name", name);
          setValue("email", email );
          setValue("cpf", cpfAdjuted);
          setValue("telefone", telefone );
          setValue("id_sector", sector.name);
          setValue("id_position", position.name);
          setValue("id_role", permissions[0].name);

          
        }
      }
    }

    fetchData();
  }, [state, reset]);
  return null;
}
