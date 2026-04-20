import { useAppSelector } from "@/hooks/redux/useAppSelector";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default ProtectedRoutes;
