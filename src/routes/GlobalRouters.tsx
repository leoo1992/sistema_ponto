import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';
import LossPassword from '../pages/LossPassword';
import ErrorPage from '../pages/ErrorPage';
import RouteIncorrect from '../pages/RouteIncorrect';

const GlobalRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} errorElement={<ErrorPage />} />
        <Route
          path="/losspass"
          element={<LossPassword />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<RouteIncorrect />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouters;
