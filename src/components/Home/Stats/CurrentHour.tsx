import { statsUse } from "../../../types";

export default function CurrentHour({ statsUse }: statsUse) {
    return (
        <div className="indicator text-center font-bold transition-all duration-500 ease-in-out">
            <span
                className="indicator-item indicator-bottom indicator-center
            badge badge-accent -z-40 shadow-md shadow-accent transition-all duration-500 ease-in-out">
                Hora atual
            </span>
            <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-md shadow-gray-500 p-4 sm:p-5 rounded-lg transition-all duration-500 ease-in-out">
                {statsUse.hours}:
                {statsUse.minutes}:
                {statsUse.seconds}
            </div>
        </div>
    )
}
