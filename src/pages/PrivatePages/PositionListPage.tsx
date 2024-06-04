import PositionList from "../../components/Position/PositionList";
import Waves from "../../components/UX/Waves";
export default function PositionListPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow flex-col py-2">
      <PositionList />
      <Waves />
    </div>
  );
}
