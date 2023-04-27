import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PriverRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return <div className="">Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PriverRoute;
