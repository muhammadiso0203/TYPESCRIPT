import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = "adsdslkpnsc";
  return token ? <Outlet /> : <Navigate replace to={"login"} />;
};

export default React.memo(Auth);
