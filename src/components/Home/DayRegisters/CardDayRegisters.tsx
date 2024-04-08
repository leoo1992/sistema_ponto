/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Key } from 'react';

// @ts-expect-error
export default function CardDayRegisters({ statsUse }) {
  const entryTimes = statsUse.entryTime.slice().sort();
  const exitTimes = statsUse.exitTime.slice().sort();

  return statsUse.entryTime.some((time: null | string) => time !== null) ||
    statsUse.exitTime.some((time: null | string) => time !== null) ? (
    <div className="rounded-lg mt-3 ml-3 w-52 bg-secondary-content shadow-md shadow-gray-500">
      <span
        className=" w-32 sm:w-full badge badge-ghost bg-gray-300 rounded-md -z-40 shadow-md shadow-gray-300
       text-black border-0 font-bold p-2 sm:p-4 text-xs sm:text-md"
      >
        Ultimos registros
      </span>
      <div className="card-body p-3">
        <div className="flex  gap-3 sm:flex-row flex-col w-full justify-around">
          <div className="time-entries">
            <p className="label font-bold">Entradas</p>
            {entryTimes.map((time: string, index: Key) => (
              <p key={index} className="time text-center">
                {time}
              </p>
            ))}
          </div>
          <div className="time-exits">
            <p className="label font-bold">Saídas</p>
            {exitTimes.map((time: string, index: Key) => (
              <p key={index} className="time text-center">
                {time}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="card-actions justify-center pb-3 w-full">
        {statsUse.exitTime[2] ? (
          <button
            className="btn px-1 cursor-pointer pointer-events-auto btn-secondary btn-xs shadow-md shadow-secondary 
          font-bold"
          >
            Ajustar
          </button>
        ) : null}
        <button
          className="btn px-1 cursor-pointer pointer-events-auto btn-primary btn-xs shadow-md shadow-primary 
        font-bold"
        >
          Detalhar
        </button>
      </div>
    </div>
  ) : null;
}
