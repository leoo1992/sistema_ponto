import LeftMenu from './LeftMenu';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <div className="navbar bg-primary-content hover:opacity-100 shadow-lg z-50">
      <LeftMenu />
      <div className="navbar-center sm:text-xl font-bold">PontoAdm</div>
      <div className="navbar-end m-0 p-0">
        <UserMenu />
      </div>
    </div>
  );
}
