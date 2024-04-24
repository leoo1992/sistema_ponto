import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="z-0 footer items-center border border-t-2 bg-opacity-50 border-red-200 border-opacity-30  p-2 bg-primary-content text-base-content">
      <nav className="grid-flow-col gap-4 place-self-center">
        <a
          href="https://www.linkedin.com/in/leocustodio1992/"
          target="_blank"
          className="flex flex-col justify-center text-center align-middle self-center items-center"
        >
          <span className="text-xl text-blue-500">
            <FaLinkedinIn />
          </span>
          <span className="text-xs font-bold text-blue-500">Leonardo</span>
        </a>
        <a
          href="https://github.com/leoo1992/sistema_ponto"
          target="_blank"
          className="flex flex-col justify-center text-center align-middle self-center items-center"
        >
          <span className="text-xl">
            <FiGithub />
          </span>
          <span className="text-xs font-bold">Front</span>
        </a>
        <div className="divider divider-primary-content divider-horizontal m-0 p-0"></div>
        <a
          href="https://github.com/samuel-melo1/PontoAPI"
          target="_blank"
          className="flex flex-col justify-center text-center align-middle self-center items-center"
        >
          <span className="text-xl">
            <FiGithub />
          </span>
          <span className="text-xs font-bold">Back</span>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-de-melo-8a9a1222b/"
          target="_blank"
          className="flex flex-col justify-center text-center align-middle self-center items-center"
        >
          <span className="text-xl text-blue-500">
            <FaLinkedinIn />
          </span>
          <span className="text-xs font-bold text-blue-500">Samuel</span>
        </a>
      </nav>
    </footer>
  );
}
