import { HiUserGroup } from "react-icons/hi";
import {
  HiHome,
  HiUserAdd,
  HiXCircle,
  HiMenu,
  HiClock,
  HiClipboardList,
  // HiAdjustments,
  HiPresentationChartLine,
} from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftMenu() {
  const [active, setActive] = useState(true);
  return (
    <div className="navbar-start">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex content-center items-center justify-center self-center">
          <button
            onClick={() => setActive(!active)}
            className="flex content-center items-center
            justify-center self-center transition-all duration-1000 ease-in-out"
          >
            <label
              htmlFor="my-drawer"
              className={`btn-xl btn btn-circle btn-ghost drawer-button 
              absolute left-0 z-50 m-1 flex content-center items-center justify-center 
              self-center p-0 text-2xl ${!active ? "text-error " : ""}`}
            >
              {active ? <HiMenu /> : <HiXCircle />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay flex h-svh w-svw content-center
                        items-center justify-between self-center align-middle
                        transition-all duration-1000 ease-in-out"
            onClick={() => setActive(!active)}
          ></label>
          <ul className="menu h-svh w-48 bg-primary-content pt-16 text-base-content shadow-sm shadow-primary">
            <li>
              <Link to="/home" className="rounded-badge text-base font-bold">
                <span className="text-2xl">
                  <HiHome />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="rounded-badge text-base font-bold"
              >
                <span className="text-2xl">
                  <HiUserAdd />
                </span>
                Cadastro
              </Link>
            </li>
            <li>
              <Link
                to="/userslist"
                className="rounded-badge text-base font-bold"
              >
                <span className="text-2xl">
                  <HiUserGroup />
                </span>
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/charts" className="rounded-badge text-base font-bold">
                <span className="text-2xl">
                  <HiPresentationChartLine />
                </span>
                Gráficos
              </Link>
            </li>
            <li>
              <Link to="/reports" className="rounded-badge text-base font-bold">
                <span className="text-2xl">
                  <HiClipboardList />
                </span>
                Relatórios
              </Link>
            </li>
            <li>
              <Link to="/history" className="rounded-badge text-base font-bold">
                <span className="text-2xl">
                  <HiClock />
                </span>
                Histórico
              </Link>
            </li>
            {/* <li>
              <Link
                to="/corrections"
                className="rounded-badge font-bold text-base"
              >
                <span className="text-2xl">
                  <HiAdjustments />
                </span>
                Ajustes
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
