import FormLogin from "../components/Login";
import TitleAndSubTitle from "../components/Login/subComponents/TitleAndSubTitle";
import Waves from "../components/Waves";

export default function LoginPage() {
  return (
    <div className="z-0 m-0 flex flex-grow items-start justify-center py-5">
      <div className="hero-content flex-col pt-10">
        <TitleAndSubTitle />
        <FormLogin />
        <Waves />
      </div>
    </div>
  );
}
