import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/Home/Nav/Navbar";
import StatsBar from "../components/Home/Stats/StatsBar";
export default function HomePage() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex flex-col justify-between w-full h-full">
        <StatsBar />
      </div>
      <Footer />
    </div>
  )
}
