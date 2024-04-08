import { useState } from 'react';

export function useStats() {
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startWorkTime, setStartWorkTime] = useState<null | {
    hours: string;
    minutes: string;
    seconds: string;
  }>(null);
  const [isCheckInVisible, setIsCheckInVisible] = useState(true);
  const [hoursWork, setHoursWork] = useState('00');
  const [minutesWork, setMinutesWork] = useState('00');
  const [secondsWork, setSecondsWork] = useState('00');
  const [timeStop, setTimeStop] = useState(true);
  const [checkInCount, setCheckInCount] = useState(0);
  const [checkOutCount, setCheckOutCount] = useState(0);
  const [entryTime, setEntryTime] = useState<
    [null | string, null | string, null | string]
  >([null, null, null]);
  const [exitTime, setExitTime] = useState<
    [null | string, null | string, null | string]
  >([null, null, null]);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  function formatHora(date: Date) {
    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  function checkIn() {
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

  function checkOut() {
    if (checkOutCount < 3) {
      setExitTime((prevExitTime) => {
        const newExitTime = [...prevExitTime];
        newExitTime[checkOutCount] = formatHora(currentTime);
        return newExitTime as [null | string, null | string, null | string];
      });

      setIsCheckInVisible(true);
      setTimeStop(true);
    } else {
      setCheckOutCount(0);
      setExitTime((prevExitTime) => {
        const newExitTime = [...prevExitTime];
        newExitTime[checkOutCount] = formatHora(currentTime);
        return newExitTime as [null | string, null | string, null | string];
      });
      setTimeStop(true);
      setIsCheckInVisible(true);
    }
    setCheckOutCount((prevCount) => prevCount + 1);
  }

  return {
    startTime,
    currentTime,
    setCurrentTime,
    hoursWork,
    minutesWork,
    secondsWork,
    hours,
    minutes,
    seconds,
    isCheckInVisible,
    setIsCheckInVisible,
    checkIn,
    checkOut,
    setStartTime,
    setHoursWork,
    setMinutesWork,
    setSecondsWork,
    timeStop,
    setTimeStop,
    entryTime,
    exitTime,
  };
}
