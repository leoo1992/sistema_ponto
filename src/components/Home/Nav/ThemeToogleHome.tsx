import MoonTheme from "../../Icons/MoonTheme";
import SunTheme from "../../Icons/SunTheme";

export default function ThemeToogleHome() {
  return (
    <label className="swap swap-rotate p-2">
    <input type="checkbox" className="theme-controller " value="synthwave" />
    <SunTheme />
    <MoonTheme />
</label>
  )
}
