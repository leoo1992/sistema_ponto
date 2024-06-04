import Waves from "../../components/UX/Waves";
import { useState } from "react";

export default function HomePage() {
  const [btnState, setBtnState] = useState(true);

  return (
    <div className="z-0 m-0 flex flex-grow flex-col items-center py-5">
      HOME
      <div className="flex justify-end w-full p-3">
        {btnState ? (
          <button
            onClick={() => setBtnState(!btnState)}
            className={`btn glass btn-primary m-2 w-36 bg-primary text-white`}
          >
            Registrar Entrada
          </button>
        ) : (
          <button
            onClick={() => setBtnState(!btnState)}
            className={`btn glass btn-error m-2 w-36 bg-error text-white`}
          >
            Registrar Saida
          </button>
        )}
      </div>
      <Waves />
    </div>
  );
}
