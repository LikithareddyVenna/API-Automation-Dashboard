import {
  LayoutDashboard,
  Workflow,
  Plug,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen sticky top-0 bg-slate-900 text-white p-5 flex flex-col">

      {/* Top Section */}
      <div>

        <h1 className="text-2xl font-bold mb-10">
          API Dashboard
        </h1>

        <ul className="space-y-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:bg-white/10"
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/workflows"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:bg-white/10"
              }`
            }
          >
            <Workflow size={20} />
            Workflows
          </NavLink>

          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:bg-white/10"
              }`
            }
          >
            <Plug size={20} />
            Integrations
          </NavLink>

          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:bg-white/10"
              }`
            }
          >
            <CreditCard size={20} />
            Payments
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:bg-white/10"
              }`
            }
          >
            <BarChart3 size={20} />
            Analytics
          </NavLink>

        </ul>

      </div>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-white/10">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-indigo-500 shadow-lg shadow-indigo-500/20"
                : "hover:bg-white/10"
            }`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </div>

    </div>
  );
}