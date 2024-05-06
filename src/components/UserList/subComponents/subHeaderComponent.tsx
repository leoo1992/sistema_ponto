import { HiSearch, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

export const subHeaderComponent = (
  <div className="flex-col-2 flex w-full items-center justify-end gap-1 text-center text-xs">
    <Link
      to="/register"
      className="text-md btn btn-circle glass btn-primary
         btn-sm mt-1 rounded-full bg-primary font-bold
        text-white shadow-md shadow-primary-content sm:w-28 sm:rounded-badge"
    >
      <span className="hidden sm:block">Cadastro</span>
      <span className="text-xl sm:hidden">
        <HiUserAdd />
      </span>
    </Link>
    <label
      className="input input-sm input-bordered flex w-full min-w-36 items-center
      gap-1 rounded-badge p-4 shadow-sm shadow-primary-content sm:w-fit"
    >
      <HiSearch />
      <input type="text" className="grow" placeholder="Pesquisar" />
    </label>
  </div>
);
