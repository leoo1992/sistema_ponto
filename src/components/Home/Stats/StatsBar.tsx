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
            <div className="m-2 flex justify-end items-end flex-col transition-all duration-500 ease-in-out">
                <div className='my-5 mx-5 flex justify-between flex-col gap-5 sm:flex-row transition-all duration-500 ease-in-out'>
                    {statsUse.isCheckInVisible ? (
                        <button onClick={statsUse.checkIn} className='btn bg-green-500 btn-success font-bold text-base-content shadow-md shadow-green-600 transition-all duration-500 ease-in-out'>Registrar Entrada</button>
                    ) : (
                        <button onClick={statsUse.checkOut} className='btn bg-red-500 btn-error font-bold text-base-content shadow-md shadow-red-600 transition-all duration-500 ease-in-out'>Registrar Saída</button>
                    )}
                    <WorkingTime statsUse={statsUse} />
                    <CurrentHour statsUse={statsUse} />
                </div>
                <BankOFWorkingHours />
                <div className="m-5 -z-50 transition-all duration-500 ease-in-out">
                    <button className="btn btn-primary btn-xs sm:btn-sm shadow-md shadow-primary font-bold -z-50 text-white">Detalhar</button>
                </div>
            </div>
        </>
    )
}
