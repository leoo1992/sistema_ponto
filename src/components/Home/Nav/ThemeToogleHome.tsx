import MoonTheme from "../../Icons/MoonTheme";
import SunTheme from "../../Icons/SunTheme";

export default function ThemeToogleHome() {
  return (
    <label className="swap swap-rotate p-0 m-0 btn btn-circle btn-ghost">
      <input type="checkbox" className="theme-controller " value="synthwave" />
      <SunTheme />
      <MoonTheme />
    </label>
  )
}
