import { useState } from 'react';

export function useStats() {
  const [startTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isCheckInVisible, setIsCheckInVisible] = useState(true);

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


    const checkIn = () => {
        setIsCheckInVisible(false);
    };

    const checkOut = () => {
        setIsCheckInVisible(true);
    };


  return {
    startTime,
    currentTime,
    setCurrentTime,
    hoursTrabalhada,
    minutesTrabalhada,
    secondsTrabalhada,
    hours,
    minutes,
    seconds,
    isCheckInVisible,
    checkIn,
    checkOut
  };
}
