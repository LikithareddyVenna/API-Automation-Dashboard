export default function IntegrationStats() {
  const stats = [
    {
      title: "Total",
      value: 5,
    },
    {
      title: "Connected",
      value: 3,
    },
    {
      title: "Disconnected",
      value: 2,
    },
    {
      title: "Pending",
      value: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-gray-500">
            {stat.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}