export interface statsUse {
    statsUse: {
        startTime?: Date | undefined;
        currentTime?: Date | undefined;
        setCurrentTime?: React.Dispatch<React.SetStateAction<Date>> | undefined;
        hoursTrabalhada?: string | undefined;
        minutesTrabalhada?: string | undefined;
        secondsTrabalhada?: string | undefined;
        hours?: string | undefined;
        minutes?: string | undefined;
        seconds?: string | undefined;
        setCurrentTime?: React.Dispatch<React.SetStateAction<Date>> | undefined;
    }
}