/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function BtnRegisterWorkingTime({ statsUse }) {
  return (
    <div>
      {statsUse.isCheckInVisible ? (
        <button
          onClick={statsUse.checkIn}
          className="btn btn-xs sm:btn-sm btn-success rounded-badge font-bold shadow-sm shadow-success 
                transition-all duration-500 ease-in-out text-secondary-content"
        >
          Registrar Entrada
        </button>
      ) : (
        <button
          onClick={statsUse.checkOut}
          className="btn w-36 mt-6 btn-xs sm:btn-sm rounded-badge btn-error font-bold shadow-sm shadow-error 
                transition-all duration-500 ease-in-out text-secondary-content"
        >
          Registrar Saída
        </button>
      )}
    </div>
  );
}
