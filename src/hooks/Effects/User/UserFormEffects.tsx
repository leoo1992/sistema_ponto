import { useEffect } from "react";
import getRole from "../../../services/Role/getRole";
import getPosition from "../../../services/Position/PositionListALLGET";
import getSector from "../../../services/Sector/SectorListAllGET";

export default function UserFormEffects({
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

        console.log(PositionsData);
        
        const mappedPositions = PositionsData?.map((position: any) => ({
          id: position.id_position,
          name: position.name,
        }));

        const mappedSectors = SectorsData?.map((sector: any) => ({
          id: sector.id_sector,
          name: sector.name,
        }));

        const mappedRole = RoleData?.map((role: any) => ({
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
