import { HiUserCircle, HiCog, HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function UserMenuDrawer({
  active2,
  setActive2,
  handleItemClick2,
  handleLogout,
}: any) {
  return (
    <div className="drawer-side h-svh w-svw">
      <label
        htmlFor="my-drawer-4"
        aria-label={active2 ? "Fechar menu" : "Abrir menu"}
        className="drawer-overlay flex h-svh w-svw content-center
                  items-center justify-between self-center align-middle
                  transition-all duration-1000 ease-in-out"
        onClick={() => setActive2(!active2)}
      ></label>
      <ul className="bg-opacity menu h-screen w-48 bg-primary-content pt-16 text-base-content shadow-sm shadow-primary">
        <li onClick={handleItemClick2}>
          <Link to="/profile" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiUserCircle />
            </span>
            Perfil
          </Link>
        </li>
        <li onClick={handleItemClick2}>
          <Link to="/configs" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiCog />
            </span>
            Configurações
          </Link>
        </li>
        <li onClick={handleItemClick2}>
          <button
            id="logout"
            className="rounded-badge text-base font-bold"
            onClick={handleLogout}
            aria-label="logout"
          >
            <span className="text-2xl">
              <HiLogout />
            </span>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
