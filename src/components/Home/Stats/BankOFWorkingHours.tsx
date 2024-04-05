export default function BankOFWorkingHours() {
    return (
        <div id="secundaria-1" className="p-3">
            <div className="pt-1 mt-1 indicator text-center font-bold">
                <span
                    className="indicator-item indicator-top indicator-center
                            badge badge-secondary -z-40 shadow-md shadow-secondary
                             mt-2">
                    Horas Extras
                </span>
                <div className="stats stats-vertical sm:stats-horizontal shadow-md shadow-gray-500 bg-secondary-content -z-50 ">
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
    )
}
