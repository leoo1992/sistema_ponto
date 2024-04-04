import FormLogin from "../components/Login/FormLogin";
import ThemeToogle from "../components/Login/ThemeToogle";
import TitleAndSubTitle from "../components/Login/TitleAndSubTitle";

export default function LoginPage() {
    return (
        <div className="hero min-h-screen bg-base-200 transition-all duration-500 ease-in-out">
            <div className="hero-content flex-col lg:flex-row-reverse transition-all duration-500 ease-in-out">
                <ThemeToogle />
                <TitleAndSubTitle />
                <FormLogin />
            </div>
        </div>
    )
}
