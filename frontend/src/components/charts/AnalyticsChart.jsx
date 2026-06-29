import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { workflowAnalytics } from "../../data/analytics";

export default function AnalyticsChart() {
  return (
      <div className="
      bg-white/90
      backdrop-blur-sm
      p-7
      rounded-3xl
      border
      border-gray-100
      shadow-sm
      hover:shadow-md
      transition-all
      duration-300
      mt-8
    ">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Workflow Analytics
          </h2>
        </div>

        <div className="overflow-x-auto">

          <LineChart
              width={900}
              height={300}
              data={workflowAnalytics}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />

            <YAxis axisLine={false} tickLine={false} />

            <Tooltip />

            <Line
                type="monotone"
                dataKey="workflows"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
            />

          </LineChart>

        </div>

      </div>
  );
}