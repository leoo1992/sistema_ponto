import { useState } from "react";
import LeftMenuDrawer from "./LeftMenuDrawer";
import LeftMenuToogler from "./LeftMenuToogler";

export default function LeftMenu() {
  const [active, setActive] = useState(true);

  const toogleMenu = () => {
    setActive(!active);
  };

  function handleItemClick() {
    const drawerCheckbox = document.getElementById(
      "my-drawer",
    ) as HTMLInputElement;
    if (drawerCheckbox.checked) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    } else {
      drawerCheckbox.checked = drawerCheckbox.checked;
    }
    toogleMenu();
  }

  return (
    <div className="navbar-start">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <LeftMenuToogler toogleMenu={toogleMenu} active={active} />
        <LeftMenuDrawer
          active={active}
          setActive={setActive}
          handleItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}
