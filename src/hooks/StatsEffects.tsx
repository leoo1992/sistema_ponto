import { useEffect } from 'react';
import {statsUse} from "../types";

export default function StatsEffects({statsUse}: statsUse ) {
    useEffect(() => {
        const interval = setInterval(() => {
            statsUse.setCurrentTime?.(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [statsUse]);
  return null
}
