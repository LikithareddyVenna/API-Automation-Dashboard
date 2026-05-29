import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", workflows: 40 },
  { name: "Tue", workflows: 55 },
  { name: "Wed", workflows: 35 },
  { name: "Thu", workflows: 70 },
  { name: "Fri", workflows: 60 },
  { name: "Sat", workflows: 90 },
  { name: "Sun", workflows: 75 },
];

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

      {/* Analytics Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div>
          <p className="text-sm text-slate-500">
            Total Runs
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            12.4K
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Success Rate
          </p>

          <h3 className="text-2xl font-bold text-green-600 mt-1">
            98.2%
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Avg Response
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            1.4s
          </h3>
        </div>

        <div>

          <p className="text-sm text-slate-500">
            Failed Runs
          </p>

          <h3 className="text-2xl font-bold text-red-500 mt-1">
            32
          </h3>
        </div>

      </div>

      <div className="overflow-x-auto">

        <LineChart
          width={900}
          height={300}
          data={data}
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