import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  LossPasswordPage,
  ErrorPage,
  RouteIncorrectPage,
  RegisterUserPage,
  UsersListPage,
  ChartsPage,
  ReportsPage,
  HistoryPage,
  ProfilePage,
  ConfigsPage,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

const GlobalRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route
          path="*"
          element={<RouteIncorrectPage />}
          errorElement={<ErrorPage />}
        />
        <Route path="/" element={<LoginPage />} />
        <Route path="/losspass" element={<LossPasswordPage />} />
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
        <Route
          path="/update"
          element={
            <PrivateRoute>
              <RegisterUserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/userslist"
          element={
            <PrivateRoute>
              <UsersListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/charts"
          element={
            <PrivateRoute>
              <ChartsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <HistoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/configs"
          element={
            <PrivateRoute>
              <ConfigsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouters;
