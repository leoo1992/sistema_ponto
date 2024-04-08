import AdjustIcon from '../../Icons/AdjustIcon';
import ChartsIcon from '../../Icons/ChartsIcon';
import HamburgMenu from '../../Icons/HamburgMenu';
import HistoryIcon from '../../Icons/HistoryIcon';
import ReporterIcon from '../../Icons/ReporterIcon';

export default function LeftMenu() {
  return (
    <div className="navbar-start">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-circle btn-ghost drawer-button"
          >
            <HamburgMenu />
          </label>
        </div>
        <div className="drawer-side h-svh w-svw z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center "
          ></label>
          <ul className="menu pt-4 h-svh bg-base-300 text-base-content glass shadow-md shadow-secondary">
            <li>
              <a>
                <ReporterIcon /> Relatórios
              </a>
            </li>
            <li>
              <a>
                <HistoryIcon /> Histórico
              </a>
            </li>
            <li>
              <a>
                <AdjustIcon /> Ajustes
              </a>
            </li>
            <li>
              <a>
                <ChartsIcon /> Gráficos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
