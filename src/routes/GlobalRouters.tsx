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
} from "../pages";
import PrivateRouteProvider from "./PrivateRouteProvider";

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
            <PrivateRouteProvider>
              <HomePage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path={"/register-update-user"}
          element={
            <PrivateRouteProvider>
              <RegisterUserPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path={"/register-update-sector"}
          element={
            <PrivateRouteProvider>
              <CreateAndUpdateSectorPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/userslist"
          element={
            <PrivateRouteProvider>
              <UsersListPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/charts"
          element={
            <PrivateRouteProvider>
              <ChartsPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRouteProvider>
              <ReportsPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRouteProvider>
              <HistoryPage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRouteProvider>
              <ProfilePage />
            </PrivateRouteProvider>
          }
        />
        <Route
          path="/configs"
          element={
            <PrivateRouteProvider>
              <ConfigsPage />
            </PrivateRouteProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouters;
