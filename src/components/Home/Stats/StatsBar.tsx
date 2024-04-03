import StatsEffects from '../../../hooks/StatsEffects';
import { useStats } from '../../../hooks/useStats';
import BankOFWorkingHours from './BankOFWorkingHours';
import CurrentHour from './CurrentHour';
import WorkingTime from './WorkingTime';

export default function StatsBar() {
    const statsUse = useStats();
    return (
        <>
            <StatsEffects statsUse={statsUse} />
            <div id="principal-stats" className="m-2 flex justify-end items-end flex-col">
                <div className='my-5 mx-5 flex justify-between flex-col gap-5 sm:flex-row'>
                    <WorkingTime statsUse={statsUse} />
                    <CurrentHour statsUse={statsUse} />
                </div>
                <BankOFWorkingHours />
                <div id="secundaria-2" className="m-2 -z-50">
                    <div className="btn btn-primary btn-xs sm:btn-sm shadow-lg font-bold animate-bounce -z-50 text-white">Detalhar</div>
                </div>
            </div>
        </>
    )
}
