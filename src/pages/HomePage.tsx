import LeftMenu from "../components/Home/Nav/LeftMenu";
import ThemeToogleHome from "../components/Home/Nav/ThemeToogleHome";
import UserMenu from "../components/Home/Nav/UserMenu";

export default function HomePage() {
  return (
    <div className="navbar bg-primary-content opacity-50 hover:opacity-100 glass">
      <LeftMenu />
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">PontoAdm</a>
      </div>
      <div className="navbar-end">
        <ThemeToogleHome />
        <UserMenu />
      </div>
    </div>
  )
}
