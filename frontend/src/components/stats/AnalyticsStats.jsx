export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Total Runs
        </p>

        <h3 className="text-2xl font-bold mt-1">
          12.4K
        </h3>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Success Rate
        </p>

        <h3 className="text-2xl font-bold text-green-600 mt-1">
          98.2%
        </h3>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Avg Response
        </p>

        <h3 className="text-2xl font-bold mt-1">
          1.4s
        </h3>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Failed Runs
        </p>

        <h3 className="text-2xl font-bold text-red-500 mt-1">
          32
        </h3>
      </div>

    </div>
  );
}