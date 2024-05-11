import {
  HiClipboardList,
  HiClock,
  HiHome,
  HiPresentationChartLine,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import CadsatrosContainer from "./CadsatrosContainer";
import ListasContainer from "./ListasContainer";

export default function LeftMenuDrawer({
  active,
  setActive,
  handleItemClick,
}: any) {
  return (
    <div className="drawer-side h-screen w-svw">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay flex h-screen w-svw content-center
                  items-center justify-between self-center align-middle
                  transition-all duration-1000 ease-in-out"
        onClick={() => setActive(!active)}
      ></label>
      <ul className="menu h-screen w-48 bg-primary-content pt-16 text-base-content shadow-sm shadow-primary">
        <li onClick={handleItemClick}>
          <Link to="/home" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiHome />
            </span>
            Home
          </Link>
        </li>
        <CadsatrosContainer handleItemClick={handleItemClick} />
        <ListasContainer handleItemClick={handleItemClick} />
        <li onClick={handleItemClick}>
          <Link to="/charts" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiPresentationChartLine />
            </span>
            Gráficos
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/reports" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiClipboardList />
            </span>
            Relatórios
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/history" className="rounded-badge text-base font-bold">
            <span className="text-2xl">
              <HiClock />
            </span>
            Histórico
          </Link>
        </li>
      </ul>
    </div>
  );
}
