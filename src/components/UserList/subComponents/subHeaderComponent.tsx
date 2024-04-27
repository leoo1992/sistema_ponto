import { HiSearch, HiUserAdd } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const SubHeaderComponent = (
  <div className="text-center flex flex-col-2 gap-1 justify-end items-center text-xs w-full">
    <Link
      to="/register"
      className="btn btn-circle btn-sm sm:w-28 btn-primary
         text-white bg-primary glass rounded-full sm:rounded-badge
        font-bold text-md shadow-md shadow-primary-content mt-1"
    >
      <span className="hidden sm:block">Cadastro</span>
      <span className="sm:hidden text-xl">
        <HiUserAdd />
      </span>
    </Link>
    {/* icones aqui */}
    <label
      className="input input-bordered rounded-badge p-4 input-sm flex items-center
      shadow-primary-content shadow-sm gap-1 w-full sm:w-fit min-w-36"
    >
      <HiSearch />
      <input type="text" className="grow" placeholder="Pesquisar" />
    </label>
  </div>
);
