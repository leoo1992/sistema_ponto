import CardDayRegisters from '../components/Home/DayRegisters/CardDayRegisters';
import StatsBar from '../components/Home/Stats/StatsBar';
import { useStats } from '../hooks/useStats';

export default function HomePage() {
  const statsUse = useStats();
  return (
    <div className="z-0 flex-grow flex justify-center items-start m-0 py-5">
      <CardDayRegisters statsUse={statsUse} />
      <StatsBar statsUse={statsUse} />
    </div>
  );
}
