import { useNavigate } from 'react-router-dom';
import UserIcon from '../../Icons/UserIcon';
import Cookies from 'js-cookie';
import ConfigIcon from '../../Icons/ConfigIcon';
import LogoutIcon from '../../Icons/LogoutIcon';

export default function UserMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('AuthToken');
    navigate('/');
  };

  return (
    <div className="drawer drawer-end flex flex-row-reverse w-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="btn btn-ghost p-0 m-0 btn-circle drawer-button"
        >
          <UserIcon />
        </label>
      </div>
      <div className="drawer-side h-screen w-screen z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay h-screen w-screen flex justify-between
                        self-center align-middle items-center content-center"
        ></label>
        <ul className="menu pt-4 h-screen bg-base-300 text-base-content glass shadow-md shadow-secondary">
          <li>
            <a>
              <UserIcon /> Perfil
            </a>
          </li>
          <li>
            <a>
              <ConfigIcon /> Configurações
            </a>
          </li>
          <li>
            <button onClick={handleLogout}>
              <LogoutIcon /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
