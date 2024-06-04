import TitleAndSubTitle from "../../components/Login/subComponents/TitleAndSubTitle";
import FormLossPass from "../../components/Login/LossPassword/FormLossPass";
import Waves from "../../components/UX/Waves";

export default function LossPassword() {
  return (
    <div className="z-0 m-0 flex flex-grow items-start justify-center py-5">
      <div className="hero-content flex-col pt-10">
        <TitleAndSubTitle />
        <FormLossPass />
        <Waves />
      </div>
    </div>
  );
}
