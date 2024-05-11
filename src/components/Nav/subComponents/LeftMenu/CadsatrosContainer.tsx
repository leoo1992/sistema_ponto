import { FaHammer } from "react-icons/fa";
import { HiAdjustments, HiUserAdd } from "react-icons/hi";
import { MdNavigateNext, MdAddHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CadsatrosContainer({ handleItemClick }: any) {
  return (
    <li>
      <details>
        <summary className="rounded-badge text-base font-bold">
          <span className="text-2xl">
            <HiAdjustments />
          </span>
          Cadastros
        </summary>
        <ul>
          <li onClick={handleItemClick} className="m-0 p-0">
            <Link
              to="/register"
              className="m-0 rounded-badge px-1 font-semibold text-base-content"
            >
              <span className="text-lg">
                <HiUserAdd />
              </span>
              Usuários
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </Link>
          </li>
          <li onClick={handleItemClick} className="m-0 p-0">
            <a className="m-0 rounded-badge px-1 font-semibold text-base-content">
              <span className="text-xl">
                <MdAddHomeWork />
              </span>
              Setores
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </a>
          </li>
          <li onClick={handleItemClick} className="m-0 p-0">
            <a className="m-0 rounded-badge px-1 font-semibold text-base-content">
              <span className="text-xl">
                <FaHammer />
              </span>
              Cargos
              <span className="m-0 p-0 text-xl">
                <MdNavigateNext />
              </span>
            </a>
          </li>
        </ul>
      </details>
    </li>
  );
}
