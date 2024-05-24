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
}: any) {
  useEffect(() => {
    async function fetchData() {
      try {
        const RoleData = await getRole();
        const PositionsData = await getPosition();
        const SectorsData = await getSector();

        const mappedPositions = PositionsData.map((position: any) => ({
          id: position.id_position,
          name: position.name,
        }));
        const mappedSectors = SectorsData.map((sector: any) => ({
          id: sector.id_sector,
          name: sector.name,
        }));

        const mappedRole = RoleData.map((role: any) => ({
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
            id_sector: sector.id_sector,
            id_position: position.id_position,
            id_role: permissions[0].id_role,
          });
        }
      }
    }

    fetchData();
  }, [state, reset]);
  return null;
}
