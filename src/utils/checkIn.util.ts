import { formatHora } from './formatarHora.util';

export function checkIn(
  checkInCount: number,
  startWorkTime: {
    hours: string;
    minutes: string;
    seconds: string;
  } | null,
  hoursWork: string,
  minutesWork: string,
  secondsWork: string,
  currentTime: Date,
  setStartWorkTime: React.Dispatch<
    React.SetStateAction<{
      hours: string;
      minutes: string;
      seconds: string;
    } | null>
  >,
  setEntryTime: React.Dispatch<
    React.SetStateAction<[null | string, null | string, null | string]>
  >,
  setTimeStop: React.Dispatch<React.SetStateAction<boolean>>,
  setIsCheckInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setCheckInCount: React.Dispatch<React.SetStateAction<number>>,
  setHoursWork: React.Dispatch<React.SetStateAction<string>>,
  setMinutesWork: React.Dispatch<React.SetStateAction<string>>,
  setSecondsWork: React.Dispatch<React.SetStateAction<string>>,
  setExitTime: React.Dispatch<
    React.SetStateAction<[null | string, null | string, null | string]>
  >
) {
  if (checkInCount < 3) {
    if (startWorkTime === null) {
      setStartWorkTime({
        hours: hoursWork,
        minutes: minutesWork,
        seconds: secondsWork,
      });
    }
    setEntryTime((prevEntryTime) => {
      const newEntryTime = [...prevEntryTime];
      newEntryTime[checkInCount] = formatHora(currentTime);
      return newEntryTime as [null | string, null | string, null | string];
    });

    setTimeStop(false);
    setIsCheckInVisible(false);
  } else {
    setHoursWork('00');
    setMinutesWork('00');
    setSecondsWork('00');
    setEntryTime([null, null, null]);
    setExitTime([null, null, null]);
    setCheckInCount(0);
    setTimeStop(false);
    setEntryTime((prevEntryTime) => {
      const newEntryTime = [...prevEntryTime];
      newEntryTime[checkInCount] = formatHora(currentTime);
      return newEntryTime as [null | string, null | string, null | string];
    });
    setIsCheckInVisible(false);
  }
  setCheckInCount((prevCount) => prevCount + 1);
}
