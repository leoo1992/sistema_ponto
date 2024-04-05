import CardDayRegisters from "../components/Home/DayRegisters/CardDayRegisters";
import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/Home/Nav/Navbar";
import StatsBar from "../components/Home/Stats/StatsBar";
import { useStats } from "../hooks/useStats";

export default function HomePage() {
  const statsUse = useStats();
  return (
    <div className="-z-50 flex flex-col min-h-screen min-w-screen transition-all duration-500 ease-in-out m-0 p-0">
      <Navbar />
      <div className="flex-grow flex justify-center items-start m-0 p-0">
        <CardDayRegisters />
        <StatsBar statsUse={statsUse} />
      </div>
      <Footer />
    </div>
  )
}
