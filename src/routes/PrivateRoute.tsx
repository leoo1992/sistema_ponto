import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const AuthToken = Cookies.get('AuthToken');

  if (!AuthToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
