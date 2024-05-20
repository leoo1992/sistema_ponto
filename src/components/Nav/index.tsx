import LeftMenu from "./subComponents/LeftMenu/LeftMenu";
import UserMenu from "./subComponents/UserMenu/UserMenu";

export default function Navbar() {
  return (
    <div className="navbar z-50 bg-primary-content shadow-lg shadow-blue-100 hover:opacity-100 ">
      <LeftMenu />
      <div data-testid='nav-text-center' className="navbar-center font-bold sm:text-xl">PontoAdm</div>
      <div className="navbar-end m-0 p-0">
        <UserMenu />
      </div>
    </div>
  );
}
