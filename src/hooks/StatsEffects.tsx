import { useEffect } from 'react';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
export default function StatsEffects({ statsUse }) {
    useEffect(() => {
        const interval = setInterval(() => {
            statsUse.setCurrentTime?.(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [statsUse]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (!statsUse.timeStop) {
            timer = setInterval(() => {
                statsUse.setSecondsWork?.((prevSeconds: number | string) => {
                    let newSeconds = Number(prevSeconds) + 1;
                    if (newSeconds === 60) {
                        statsUse.setMinutesWork?.((prevMinutes: number | string) => {
                            let newMinutes = Number(prevMinutes) + 1;
                            if (newMinutes === 60) {
                                statsUse.setHoursWork?.((prevHours: number | string) => Number(prevHours) + 1);
                                newMinutes = 0;
                            }
                            return newMinutes.toString().padStart(2, '0');
                        });
                        newSeconds = 0;
                    }
                    return newSeconds.toString().padStart(2, '0');
                });                
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [statsUse]);

    return null;
}
