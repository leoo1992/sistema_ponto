import {statsUse} from "../../../types";

export default function WorkingTime({statsUse}: statsUse) {
    return (
        <div className="indicator text-center font-bold mr-2 transition-all duration-500 ease-in-out">
            <span
                className="indicator-item indicator-bottom indicator-center
                            badge badge-success -z-40 shadow-md shadow-success 
                            transition-all duration-500 ease-in-out">
                Hora trabalhada
            </span>
            <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-md shadow-gray-500 p-4 sm:p-5 rounded-lg transition-all duration-500 ease-in-out">
                {statsUse.hoursTrabalhada}:
                {statsUse.minutesTrabalhada}:
                {statsUse.secondsTrabalhada}
            </div>
        </div>
    )
}
