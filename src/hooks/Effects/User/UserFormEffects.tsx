import { useEffect } from "react";

export default function UserFormEffects({
  getRole,
  getPosition,
  getSector,
  setPositions,
  setSectors,
  setRole,
}: any) {

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

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
          name: capitalizeFirstLetter(role.name),
        }));

        setPositions(mappedPositions);
        setSectors(mappedSectors);
        setRole(mappedRole);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);
  return null;
}
