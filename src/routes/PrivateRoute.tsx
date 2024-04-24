import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../components/Nav';
import Footer from '../components/Footer/Footer';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  //comente aqui para não validar rotaas
  // const AuthToken = Cookies.get('AuthToken');
  // if (!AuthToken) {
  //   return <Navigate to="/" replace />;
  // }
  // até aqui
  return (
    <div className="-z-50 flex flex-col min-h-screen min-w-screen transition-all duration-500 ease-in-out m-0 p-0">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
