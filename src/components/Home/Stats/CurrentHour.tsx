/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function CurrentHour({ statsUse }) {
    return (
        <div className="indicator text-center font-bold m-0 p-0
        flex justify-center items-center content-center self-center">
            <span
                className="indicator-item indicator-bottom indicator-center
                badge badge-warning -z-40 shadow-md shadow-badge-warning 
                flex justify-center 
                items-center content-center self-center p-2 sm:p-4 w-full">
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
