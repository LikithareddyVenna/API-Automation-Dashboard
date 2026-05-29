import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Workflows from "../pages/workflows/Workflows";
import Integration from "../pages/integration/Integration";
import Payments from "../pages/payments/Payments";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/integrations" element={<Integration />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}