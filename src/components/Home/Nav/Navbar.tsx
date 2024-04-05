import LeftMenu from "./LeftMenu";
import ThemeToogleHome from "./ThemeToogleHome";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className="navbar bg-primary-content hover:opacity-100 glass">
      <LeftMenu />
      <div className="navbar-center sm:text-xl text-accent font-bold">
        PontoAdm
      </div>
      <div className="navbar-end">
        <ThemeToogleHome />
        <UserMenu />
      </div>
    </div>
  )
}
