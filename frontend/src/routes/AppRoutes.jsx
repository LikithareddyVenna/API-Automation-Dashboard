import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import ResetPassword from "../pages/reset-password/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import Workflows from "../pages/workflows/Workflows";
import Integration from "../pages/integration/Integration";
import Payments from "../pages/payments/Payments";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
      <Routes>
        {/*Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="integrations" element={<Integration />} />
          <Route path="payments" element={<Payments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
  );
}
