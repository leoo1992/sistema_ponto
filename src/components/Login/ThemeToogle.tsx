import MoonTheme from "../Icons/MoonTheme";
import SunTheme from "../Icons/SunTheme";

export default function ThemeToogle() {
    return (
        <label className="absolute swap swap-rotate top-0 end-0 m-0 p-2">
            <input type="checkbox" className="theme-controller " value="synthwave" />
            <SunTheme />
            <MoonTheme />
        </label>
    )
}
