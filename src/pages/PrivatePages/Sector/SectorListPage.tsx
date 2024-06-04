import SectorList from "../../../components/Sector/SectorList";
import Waves from "../../../components/UX/Waves";
export default function SectorListPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow flex-col py-2">
      <SectorList />
      <Waves />
    </div>
  );
}
