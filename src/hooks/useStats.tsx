import { useState } from 'react';
import { checkIn } from '../utils/checkIn.util';
import { checkOut } from '../utils/checkOut.util.ts';

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

  const handleCheckIn = () => {
    checkIn(
      checkInCount,
      startWorkTime,
      hoursWork,
      minutesWork,
      secondsWork,
      currentTime,
      setStartWorkTime,
      setEntryTime,
      setTimeStop,
      setIsCheckInVisible,
      setCheckInCount,
      setHoursWork,
      setMinutesWork,
      setSecondsWork,
      setExitTime
    );
  };

  const handleCheckOut = () => {
    checkOut(
      checkOutCount,
      currentTime,
      setExitTime,
      setIsCheckInVisible,
      setTimeStop,
      setCheckOutCount
    );
  };

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
    checkIn: handleCheckIn,
    checkOut: handleCheckOut,
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
