import {
  HiXCircle,
  HiUser,
  HiUserCircle,
  HiCog,
  HiLogout,
} from 'react-icons/hi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function UserMenu() {
  const [active2, setActive2] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('AuthToken');
    navigate('/');
  };

  return (
    <div className="navbar-end">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center items-center self-center content-center">
          <button
            onClick={() => setActive2(!active2)}
            className="flex justify-center items-center self-center content-center"
          >
            <label
              htmlFor="my-drawer-4"
              className={`flex justify-center items-center self-center content-center 
              btn btn-circle btn-xl p-0 m-1 text-2xl right-0 btn-ghost 
              drawer-button z-50 absolute ${!active2 ? 'text-error ' : ''}`}
            >
              {active2 ? <HiUser /> : <HiXCircle />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay h-screen w-screen flex justify-between
                        self-center align-middle items-center content-center"
            onClick={() => setActive2(!active2)}
          ></label>
          <ul className="menu pt-16 h-screen bg-primary-content text-base-content shadow-sm shadow-primary w-48">
            <li>
              <a className="rounded-badge font-bold text-base">
                <span className="text-2xl">
                  <HiUserCircle />
                </span>
                Perfil
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <span className="text-2xl">
                  <HiCog />
                </span>
                Configurações
              </a>
            </li>
            <li>
              <button
                className="rounded-badge font-bold text-base"
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
