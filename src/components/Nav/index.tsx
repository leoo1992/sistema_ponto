import LeftMenu from './subComponents/LeftMenu';
import UserMenu from './subComponents/UserMenu';

export default function Navbar() {
  return (
    <div className="navbar glass bg-primary-content shadow-blue-100 hover:opacity-100 shadow-lg z-50">
      <LeftMenu />
      <div className="navbar-center sm:text-xl font-bold">PontoAdm</div>
      <div className="navbar-end m-0 p-0">
        <UserMenu />
      </div>
    </div>
  );
}
