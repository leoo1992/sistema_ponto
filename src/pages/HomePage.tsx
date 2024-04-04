import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/Home/Nav/Navbar";
import StatsBar from "../components/Home/Stats/StatsBar";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="flex-grow transition-all duration-500 ease-in-out">
            <StatsBar />
      </div>
      <Footer />
    </div>
  )
}
