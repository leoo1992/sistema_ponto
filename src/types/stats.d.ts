export interface statsUse {
    startTime?: Date;
    currentTime?: Date;
    setCurrentTime?: React.Dispatch<React.SetStateAction<Date>>;
    hoursTrabalhada?: string;
    minutesTrabalhada?: string;
    secondsTrabalhada?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
}