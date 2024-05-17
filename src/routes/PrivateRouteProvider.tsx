import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../components/Nav";
import Footer from "../components/Footer/Footer";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRouteProvider({ children }: PrivateRouteProps) {
  //comente aqui para não validar rotaas
  const AuthToken = Cookies.get("AuthToken");
  if (!AuthToken) {
    return <Navigate to="/" replace />;
  }
  // até aqui
  return (
    <div className="min-w-screen -z-50 m-0 flex min-h-screen flex-col p-0 transition-all duration-500 ease-in-out">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
