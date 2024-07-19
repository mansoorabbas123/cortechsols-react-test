import { Outlet, Navigate } from "react-router";
import { MainLayout } from "../layouts/MainLayout";

export const ProtectedRoute = () => {
  // simulating token
  const savedCreds: any = localStorage.getItem("creds");
  const token =
    savedCreds && JSON.parse(savedCreds) && JSON.parse(savedCreds).token
      ? true
      : false;
  // const toke = true;

  return token ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};
