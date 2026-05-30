import AnalyticsChart from "../../components/charts/AnalyticsChart";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor platform performance.
        </p>
      </div>

      <AnalyticsChart />
    </div>
  );
}