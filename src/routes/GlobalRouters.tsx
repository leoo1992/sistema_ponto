import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  LossPassword,
  ErrorPage,
  RouteIncorrect,
  RegisterUserPage,
} from '../pages';
import PrivateRoute from './PrivateRoute';

const GlobalRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route
          path="*"
          element={<RouteIncorrect />}
          errorElement={<ErrorPage />}
        />
        <Route path="/" element={<LoginPage />} />
        <Route path="/losspass" element={<LossPassword />} />
        {/* PRIVATES */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <RegisterUserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouters;
