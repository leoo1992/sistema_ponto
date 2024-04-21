import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main
      className="grid min-h-full w-full place-items-center text-center px-2 py-24 sm:py-32 
    lg:px-8 bg-gradient-to-tr from-blue-100  to-red-100 transition-all duration-500 
    ease-in-out"
    >
      <div
        className="text-center shadow-md shadow-blue-300 bg-gradient-to-bl from-white
       to-blue-100 p-14 m-0 rounded-3xl sm:w-96"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-primary ">Opa...</h1>
        <p className="mt-2 text-lg sm:text-xl font-bold text-primary">
          Houve algum problema
        </p>
        <p className="text-md sm:text-lg font-semibold text-primary">
          Retorne a pagina inicial
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-circle btn-primary bg-primary font-bold mt-10 btn-md w-3/4 
          glass shadow-sm hover:shadow-lg shadow-primary text-white"
        >
          Retornar
        </button>
      </div>
    </main>
  );
}