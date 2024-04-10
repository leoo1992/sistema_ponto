import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../Icons/UserIcon';
import Cookies from 'js-cookie';
import ConfigIcon from '../../Icons/ConfigIcon';
import LogoutIcon from '../../Icons/LogoutIcon';
import CloseIcon from '../../Icons/CloseIcon';

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
        <div className="drawer-content">
          <button onClick={() => setActive2(!active2)}>
            <label
              htmlFor="my-drawer-4"
              className="btn btn-circle p-0 m-0 -top-4 right-0 btn-ghost drawer-button z-50 absolute"
            >
              {active2 ? <UserIcon /> : <CloseIcon />}
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
                <UserIcon /> Perfil
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <ConfigIcon /> Configurações
              </a>
            </li>
            <li>
              <button
                className="rounded-badge font-bold text-base"
                onClick={handleLogout}
              >
                <LogoutIcon /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
