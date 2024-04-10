import StatsEffects from '../../../hooks/StatsEffects';
import BankOFWorkingHours from './BankOFWorkingHours';
import BtnRegisterWorkingTime from './BtnRegisterWorkingTime';
import CurrentHour from './CurrentHour';
import WorkingTime from './WorkingTime';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function StatsBar({ statsUse }) {
  return (
    <>
      <StatsEffects statsUse={statsUse} />
      <div className="m-0 px-3 pt-2 flex justify-end items-end flex-col">
        <div
          className="p-0 m-0 flex justify-center content-center
                flex-col gap-4 sm:flex-row"
        >
          <BtnRegisterWorkingTime statsUse={statsUse} />
          <WorkingTime statsUse={statsUse} />
          <CurrentHour statsUse={statsUse} />
        </div>
        <BankOFWorkingHours />
      </div>
    </>
  );
}
