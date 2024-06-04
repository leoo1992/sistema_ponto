import CreatePosition from "../../../components/Position/CreatePosition";
import Waves from "../../../components/UX/Waves";

export default function CreatePositionPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow items-start justify-center pt-8">
      <CreatePosition />
      <Waves />
    </div>
  );
}
