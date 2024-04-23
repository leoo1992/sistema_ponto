import FormLogin from '../components/Login';
import TitleAndSubTitle from '../components/Login/subComponents/TitleAndSubTitle';

export default function LoginPage() {
  return (
    <div
      className="hero min-h-screen transition-all duration-500 ease-in-out items-start 
    bg-gradient-to-t from-slate-100 via-white to-white"
    >
      <div className="hero-content flex-col pt-10">
        <TitleAndSubTitle />
        <FormLogin />
      </div>
    </div>
  );
}
