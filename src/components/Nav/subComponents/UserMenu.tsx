import {
  HiXCircle,
  HiUser,
  HiUserCircle,
  HiCog,
  HiLogout,
} from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function UserMenu() {
  const [active2, setActive2] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("AuthToken");
    navigate("/");
  };

  const toogleMenu2 = () => {
    setActive2(!active2);
  };

  function handleItemClick2() {
    const drawerCheckbox = document.getElementById(
      "my-drawer-4",
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    }
    toogleMenu2();
  }

  return (
    <div className="navbar-end">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex content-center items-center justify-center self-center">
          <button
            onClick={toogleMenu2}
            className="flex content-center items-center justify-center self-center"
          >
            <label
              htmlFor="my-drawer-4"
              className={`btn-xl btn btn-circle btn-ghost drawer-button 
              absolute right-0 z-50 m-1 flex content-center items-center justify-center 
              self-center p-0 text-2xl ${!active2 ? "text-error " : ""}`}
            >
              {active2 ? <HiUser /> : <HiXCircle />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
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
                className="rounded-badge text-base font-bold"
                onClick={handleLogout}
              >
                <span className="text-2xl">
                  <HiLogout />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
