import { useEffect } from 'react';

export function pegarHoraAtual({ statsUse }: any) {
  useEffect(() => {
    const interval = setInterval(() => {
      statsUse.setCurrentTime?.(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [statsUse]);
}
