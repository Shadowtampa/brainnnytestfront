import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import useAuth from "../hooks/useService";
import { Dashboard } from "../pages/Dashboard/Admin/Dashboard";
import { Dashboard as DashUser } from "../pages/Dashboard/User/Dashboard";

function AppRouter() {
  const { role, jwt } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<div>login</div>} />

      <Route
        path="/dashboard"
        element={jwt ? (role === "admin" ? <Dashboard /> : <Navigate to="/meus-registros" />) : <Navigate to="/" />}
      />

      <Route
        path="/meus-registros"
        element={jwt ? <DashUser /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default AppRouter;
