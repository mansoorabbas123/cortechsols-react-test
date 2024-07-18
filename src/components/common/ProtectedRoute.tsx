import { Outlet, Navigate } from "react-router";
import { MainLayout } from "../layouts/MainLayout";

export const ProtectedRoute = () => {
  const token = true;

  return token ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};
