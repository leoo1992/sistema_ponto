import { FaHammer } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdTableRows, MdNavigateNext, MdAddHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ListasContainer({ handleItemClick }: any) {
  return (
    <li>
      <details>
        <summary className="rounded-badge text-base font-bold">
          <span className="text-2xl">
            <MdTableRows />
          </span>
          Listas
        </summary>
        <ul onClick={handleItemClick}>
          <li className="m-0 p-0">
            <Link
              to="/userslist"
              className="m-0 rounded-badge px-1 font-semibold text-base-content"
            >
              <span className="text-xl">
                <HiUserGroup />
              </span>
              Usuários
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </Link>
          </li>
          <li onClick={handleItemClick} className="m-0 p-0">
            <Link
              to="/sectorslist"
              className="m-0 rounded-badge px-1 font-semibold text-base-content"
            >
              <span className="text-xl">
                <MdAddHomeWork />
              </span>
              Setores
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </Link>
          </li>
          <li onClick={handleItemClick} className="m-0 p-0">
            <Link
              to="/positionslist"
              className="m-0 rounded-badge px-1 font-semibold text-base-content"
            >
              <span className="text-xl">
                <FaHammer />
              </span>
              Cargos
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </Link>
          </li>
        </ul>
      </details>
    </li>
  );
}
