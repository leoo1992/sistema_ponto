import { HiMenu, HiXCircle } from "react-icons/hi";

export default function LeftMenuToogler({ toogleMenu, active }: any): any {
  return (
    <div className="drawer-content flex content-center items-center justify-center self-center">
      <button
      data-testid="left-menu-btn"
        onClick={toogleMenu}
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
  );
}
