import TitleAndSubTitle from '../components/Login/subComponents/TitleAndSubTitle';
import FormLossPass from '../components/LossPassword/FormLossPass';
import Waves from '../components/Waves';

export default function LossPassword() {
  return (
    <div className="z-0 flex-grow flex justify-center items-start m-0 py-5">
      <div className="hero-content flex-col pt-10">
        <TitleAndSubTitle />
        <FormLossPass />
        <Waves />
      </div>
    </div>
  );
}
