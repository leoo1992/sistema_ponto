export default function BankOFWorkingHours() {
    return (
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
    )
}
