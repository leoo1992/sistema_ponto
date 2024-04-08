// import ThemeToogle from "../components/Login/ThemeToogle";
import FormLogin from '../components/Login/FormLogin';
import TitleAndSubTitle from '../components/Login/TitleAndSubTitle';

export default function LoginPage() {
  return (
    <div
      className="hero min-h-screen bg-base-300 transition-all duration-500 ease-in-out items-start 
    bg-gradient-to-t from-slate-100 via-white to-white"
    >
      <div className="hero-content flex-col pt-10">
        {/* <ThemeToogle /> */}
        <TitleAndSubTitle />
        <FormLogin />
      </div>
    </div>
  );
}
