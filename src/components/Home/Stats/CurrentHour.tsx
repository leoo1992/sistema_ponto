import {statsUse} from "../../../types";

export default function CurrentHour({statsUse}: statsUse) {
    return (
        <div className="indicator text-center font-bold">
        <span
            className="indicator-item indicator-bottom indicator-center
            badge badge-accent -z-40 shadow-lg">
            Hora atual
        </span>
        <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-lg p-4 sm:p-5 rounded-lg">
            {statsUse.hours}:
            {statsUse.minutes}:
            {statsUse.seconds}
        </div>
    </div>
    )
}
