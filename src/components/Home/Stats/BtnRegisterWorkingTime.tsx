/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function BtnRegisterWorkingTime({ statsUse }) {
    return (
        <div>
            {statsUse.isCheckInVisible ? (
                <button onClick={statsUse.checkIn} className='btn w-36 btn-xs sm:btn-sm bg-green-500 btn-success font-bold text-base-content shadow-md shadow-green-600 transition-all duration-500 ease-in-out'>Registrar Entrada</button>
            ) : (
                <button onClick={statsUse.checkOut} className='btn w-36 mt-6 btn-xs sm:btn-sm bg-red-500 btn-error font-bold text-base-content shadow-md shadow-red-600 transition-all duration-500 ease-in-out'>Registrar Saída</button>
            )}
        </div>
    )
}
