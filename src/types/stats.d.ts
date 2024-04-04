export interface statsUse {
    statsUse: {
        startTime?: Date | null | undefined;
        currentTime?: Date | undefined;
        setCurrentTime?: React.Dispatch<React.SetStateAction<Date>> | undefined;
        hoursWork?: string | undefined;
        minutesWork?: string | undefined;
        secondsWork?: string | undefined;
        hours?: string | undefined;
        minutes?: string | undefined;
        seconds?: string | undefined;
        isCheckInVisible?: boolean;
        setIsCheckInVisible?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
        checkIn?: () => void;
        checkOut?: () => void;
        setStartTime?: React.Dispatch<React.SetStateAction<Date | null>> | undefined;
        setSecondsWork?: React.Dispatch<React.SetStateAction<number | string>> | undefined;
        setMinutesWork?: React.Dispatch<React.SetStateAction<number | string>> | undefined;
        setHoursWork?: React.Dispatch<React.SetStateAction<number | string>> | undefined;
        timeStop?: boolean | undefined;
        setTimeStop?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    }
}