import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastBar, Toaster } from "react-hot-toast";
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
  CreateAndUpdateSectorPage,
  CreateAndUpdatePositionPage,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

const GlobalRouters = () => {
  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "transition-all duration-500 ease-in-out",
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
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
          path={"/register-update-user"}
          element={
            <PrivateRoute>
              <RegisterUserPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/register-update-sector"}
          element={
            <PrivateRoute>
              <CreateAndUpdateSectorPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/register-update-position"}
          element={
            <PrivateRoute>
              <CreateAndUpdatePositionPage />
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
