import { useNavigate } from "react-router-dom";
import Waves from "../../components/UX/Waves";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main
      className="grid min-h-full w-full place-items-center bg-gradient-to-tr from-blue-100 to-red-100 px-2 
    py-24 text-center transition-all  duration-500 ease-in-out sm:py-32 
    lg:px-8"
    >
      <div
        className="m-0 rounded-3xl bg-gradient-to-bl from-white to-blue-100
       p-14 text-center shadow-md shadow-blue-300 sm:w-96"
      >
        <h1 className="text-3xl font-bold text-primary sm:text-4xl ">Opa...</h1>
        <p className="mt-2 text-lg font-bold text-primary sm:text-xl">
          Houve algum problema
        </p>
        <p className="text-md font-semibold text-primary sm:text-lg">
          Retorne a pagina inicial
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-circle glass btn-primary btn-md mt-10 w-3/4 bg-primary 
          font-bold text-white shadow-sm shadow-primary hover:shadow-lg"
        >
          Retornar
        </button>
      </div>
      <Waves />
    </main>
  );
}
