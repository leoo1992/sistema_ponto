import CreateUser from "../../components/User/CreateUser";
import Waves from "../../components/UX/Waves";

export default function CreateUserPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow items-center justify-center p-0">
      <CreateUser />
      <Waves />
    </div>
  );
}
