import {Stats} from "../../../types";

export default function WorkingTime({statsUse}: Stats) {
    return (
        <div className="indicator text-center font-bold mr-2">
            <span
                className="indicator-item indicator-bottom indicator-center
                            badge badge-success -z-40 shadow-lg">
                Hora trabalhada
            </span>
            <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-lg p-4 sm:p-5 rounded-lg">
                {statsUse.hoursTrabalhada}:
                {statsUse.minutesTrabalhada}:
                {statsUse.secondsTrabalhada}
            </div>
        </div>
    )
}
