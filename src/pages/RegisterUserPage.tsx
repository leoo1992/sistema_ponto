import RegisterUser from "../components/RegisterUser";
import Waves from "../components/Waves";

export default function RegisterUserPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow items-center justify-center py-5">
      <RegisterUser />
      <Waves />
    </div>
  );
}
