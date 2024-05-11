import {
  HiXCircle,
  HiUser,
} from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import UserMenuDrawer from "./UserMenuDrawer";

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
    if (drawerCheckbox.checked) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    } else {
      drawerCheckbox.checked = drawerCheckbox.checked;
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
        <UserMenuDrawer
          active2={active2}
          setActive2={setActive2}
          handleItemClick2={handleItemClick2}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}
