import { useState, useEffect } from 'react';

export default function StatsBar() {
    const [startTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const calculateElapsedTime = (start: Date, end: Date) => {
        const elapsedMilliseconds = end.getTime() - start.getTime();
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((elapsedSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
        return { hours, minutes, seconds };
    };

    const { hours: hoursTrabalhada, minutes: minutesTrabalhada, seconds: secondsTrabalhada } = calculateElapsedTime(startTime, currentTime);

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    return (
        <>
            <div id="principal-stats" className="m-2 flex justify-end items-end flex-col">
                <div className='my-5 mx-5 flex justify-between flex-col gap-5 sm:flex-row'>
                    <div className="indicator text-center font-bold mr-2">
                        <span
                            className="indicator-item indicator-bottom indicator-center
                            badge badge-success -z-40 shadow-lg">
                            Hora trabalhada
                        </span>
                        <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-lg p-4 sm:p-5 rounded-lg">
                            {hoursTrabalhada}:
                            {minutesTrabalhada}:
                            {secondsTrabalhada}
                        </div>
                    </div>
                    <div className="indicator text-center font-bold">
                        <span
                            className="indicator-item indicator-bottom indicator-center
                            badge badge-accent -z-40 shadow-lg">
                            Hora atual
                        </span>
                        <div className="countdown font-mono text-lg -z-50 bg-base-300 glass shadow-lg p-4 sm:p-5 rounded-lg">
                            {hours}:
                            {minutes}:
                            {seconds}
                        </div>
                    </div>
                </div>
                <div id="secundaria-1" className="mt-5 mx-5">
                    <div className="indicator text-center font-bold">
                        <span
                            className="indicator-item indicator-top indicator-start ml-10
                            badge badge-secondary -z-40 shadow-lg">
                            Banco de Horas Extras
                        </span>
                        <div className="stats stats-vertical sm:stats-horizontal shadow-lg glass bg-base-300 -z-50">
                            <div className="stat text-sm p-4 sm:p-5">
                                <div className="stat-title">Saldo atual</div>
                                <div className="stat-value text-lg">103:22</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>
                            <div className="stat text-sm p-4 sm:p-5">
                                <div className="stat-title">Semanal</div>
                                <div className="stat-value text-lg">4:52</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>
                            <div className="stat text-sm p-4 sm:p-5">
                                <div className="stat-title">Mensal</div>
                                <div className="stat-value text-lg">52:23</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="secundaria-2" className="m-2">
                    <div className="btn btn-primary btn-xs shadow-lg font-bold">Detalhar</div>
                </div>
            </div>
        </>
    )
}
