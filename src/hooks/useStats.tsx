import { useState } from 'react';

export function useStats() {
    const [startTime, setStartTime] = useState<Date | null>(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());

    const [startWorkTime, setStartWorkTime] = useState<null | { hours: string; minutes: string; seconds: string }>(null);
    const [isCheckInVisible, setIsCheckInVisible] = useState(true);
    const [hoursWork, setHoursWork] = useState("00");
    const [minutesWork, setMinutesWork] = useState("00");
    const [secondsWork, setSecondsWork] = useState("00");
    const [timeStop, setTimeStop] = useState(true);
    const [checkInCount, setCheckInCount] = useState(0);

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    function checkIn() {
        if (checkInCount < 3) {
            setCheckInCount(prevCount => prevCount + 1);
            if (startWorkTime === null) {
                setStartWorkTime({ hours: hoursWork, minutes: minutesWork, seconds: secondsWork });
            }
            setTimeStop(false);
            setIsCheckInVisible(false);
        } else {
            setHoursWork("00");
            setMinutesWork("00");
            setSecondsWork("00");
        }
    }

    function checkOut() {
        setIsCheckInVisible(true);
        setTimeStop(true);
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
        setTimeStop
    };
}
