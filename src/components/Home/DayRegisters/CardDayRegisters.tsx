export default function CardDayRegisters() {
    return (
        <div className="rounded-lg mt-3 ml-3 w-46 bg-secondary-content shadow-md shadow-gray-500">
            <div className="card-title px-3 pt-3">
                <h1 className="font-bold text-sm text-center w-full">Ultimos Registros</h1>
            </div>
            <div className="card-body p-3">
                <div className="flex sm:flex-row flex-col w-full justify-around">
                    <div>
                        <p className="text-sm text-start w-full font-bold">Entradas</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                    </div>
                    <div>
                        <p className="text-sm text-start w-full font-bold">Saidas</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                        <p className="text-sm text-center p-1 w-full">HH:MM:SS</p>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-end px-3 pb-3">
                <button className="btn cursor-pointer pointer-events-auto btn-primary btn-xs shadow-md shadow-primary font-bold text-white">Detalhar</button>
            </div>
        </div>
    )
}
