import { useEffect } from 'react';
import {Stats} from "../types";

export default function StatsEffects({statsUse}: Stats ) {
    useEffect(() => {
        const interval = setInterval(() => {
            statsUse.setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [statsUse]);
  return null
}
