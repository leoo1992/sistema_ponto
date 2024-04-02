import FormLogin from "../components/Login/FormLogin";
import ThemeToogle from "../components/Login/ThemeToogle";
import TitleAndSubTitle from "../components/Login/TitleAndSubTitle";

export default function LoginPage() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <ThemeToogle />
                <TitleAndSubTitle />
                <FormLogin />
            </div>
        </div>
    )
}
