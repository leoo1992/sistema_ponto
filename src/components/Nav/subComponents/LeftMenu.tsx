import { HiUserGroup } from 'react-icons/hi';
import {
  HiHome,
  HiUserAdd,
  HiXCircle,
  HiMenu,
  HiClock,
  HiClipboardList,
  // HiAdjustments,
  HiPresentationChartLine,
} from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LeftMenu() {
  const [active, setActive] = useState(true);
  return (
    <div className="navbar-start">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center items-center self-center content-center">
          <button
            onClick={() => setActive(!active)}
            className="transition-all duration-1000 ease-in-out
            flex justify-center items-center self-center content-center"
          >
            <label
              htmlFor="my-drawer"
              className={`flex justify-center items-center self-center content-center 
              btn btn-circle btn-xl p-0 m-1 text-2xl left-0 btn-ghost 
              drawer-button z-50 absolute ${!active ? 'text-error ' : ''}`}
            >
              {active ? <HiMenu /> : <HiXCircle />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center
                        transition-all duration-1000 ease-in-out"
            onClick={() => setActive(!active)}
          ></label>
          <ul className="menu pt-16 h-svh bg-primary-content text-base-content shadow-sm shadow-primary w-48">
            <li>
              <Link to="/home" className="rounded-badge font-bold text-base">
                <span className="text-2xl">
                  <HiHome />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="rounded-badge font-bold text-base"
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
                className="rounded-badge font-bold text-base"
              >
                <span className="text-2xl">
                  <HiUserGroup />
                </span>
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/charts" className="rounded-badge font-bold text-base">
                <span className="text-2xl">
                  <HiPresentationChartLine />
                </span>
                Gráficos
              </Link>
            </li>
            <li>
              <Link to="/reports" className="rounded-badge font-bold text-base">
                <span className="text-2xl">
                  <HiClipboardList />
                </span>
                Relatórios
              </Link>
            </li>
            <li>
              <Link to="/history" className="rounded-badge font-bold text-base">
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
