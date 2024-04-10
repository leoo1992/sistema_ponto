import { useState } from 'react';
import AdjustIcon from '../../Icons/AdjustIcon';
import ChartsIcon from '../../Icons/ChartsIcon';
import HamburgMenu from '../../Icons/HamburgMenu';
import HistoryIcon from '../../Icons/HistoryIcon';
import ReporterIcon from '../../Icons/ReporterIcon';
import CloseIcon from '../../Icons/CloseIcon';

export default function LeftMenu() {
  const [active, setActive] = useState(true);
  return (
    <div className="navbar-start">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <button
            onClick={() => setActive(!active)}
            className="transition-all duration-1000 ease-in-out"
          >
            <label
              htmlFor="my-drawer"
              className="btn btn-circle p-0 m-0 -top-4 btn-ghost drawer-button z-50 absolute"
            >
              {active ? <HamburgMenu /> : <CloseIcon />}
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
              <a className="rounded-badge font-bold text-base">
                <ReporterIcon /> Relatórios
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <HistoryIcon /> Histórico
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <AdjustIcon /> Ajustes
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <ChartsIcon /> Gráficos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
