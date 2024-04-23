import TitleAndSubTitle from '../components/Login/subComponents/TitleAndSubTitle';
import FormLossPass from '../components/LossPassword/FormLossPass';

export default function LossPassword() {
  return (
    <div
      className="hero min-h-screen bg-base-300 transition-all duration-500 ease-in-out items-start 
    bg-gradient-to-t from-slate-100 via-white to-white"
    >
      <div className="hero-content flex-col pt-10">
        <TitleAndSubTitle />
        <FormLossPass />
      </div>
    </div>
  );
}
