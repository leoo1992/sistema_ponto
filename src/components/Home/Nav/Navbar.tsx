import LeftMenu from "./LeftMenu";
import ThemeToogleHome from "./ThemeToogleHome";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className="navbar bg-primary-content hover:opacity-100 glass transition-all duration-500 ease-in-out">
      <LeftMenu />
      <div className="navbar-center text-xl transition-all duration-500 ease-in-out">
        PontoAdm
      </div>
      <div className="navbar-end transition-all duration-500 ease-in-out">
        <ThemeToogleHome />
        <UserMenu />
      </div>
    </div>
  )
}
