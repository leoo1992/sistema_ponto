/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function CurrentHour({ statsUse }) {
    return (
        <div className="indicator text-center font-bold m-0 p-0
        flex justify-center items-center content-center self-center">
            <span
                className="indicator-item indicator-bottom indicator-center w-full
                badge badge-ghost bg-gray-300 rounded-md -z-40 shadow-md shadow-gray-300 text-black border-0 font-bold p-2 sm:p-4 text-xs sm:text-md">
                Hora atual
            </span>
            <div className="countdown font-mono text-lg -z-50 bg-secondary-content shadow-md shadow-gray-500 
                            p-4 sm:p-5 rounded-lg">
                {statsUse.hours}:
                {statsUse.minutes}:
                {statsUse.seconds}
            </div>
        </div>
    )
}
