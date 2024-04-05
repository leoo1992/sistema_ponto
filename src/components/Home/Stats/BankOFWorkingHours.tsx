export default function BankOFWorkingHours() {
    return (
        <div id="secundaria-1" className="pr-5 py-4">
            <div className="indicator text-center font-bold">
                <span
                    className="indicator-item indicator-bottom indicator-center w-full sm:w-28
                    badge badge-ghost bg-gray-300 rounded-md -z-40 shadow-md shadow-gray-300
                     text-black border-0 font-bold p-2 sm:p-4 text-xs sm:text-md">
                    Horas extras
                </span>
                <div className="stats stats-horizontal shadow-md shadow-gray-500 bg-secondary-content -z-50 ">
                    <div className="stat text-sm p-4 sm:p-5">
                        <div className="stat-title">Saldo atual</div>
                        <div className="stat-value text-lg">103:22</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat text-sm p-4 sm:p-5 hidden sm:block md:block">
                        <div className="stat-title">Semanal</div>
                        <div className="stat-value text-lg">4:52</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat text-sm p-4 sm:p-5 hidden sm:block md:block">
                        <div className="stat-title">Mensal</div>
                        <div className="stat-value text-lg">52:23</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
