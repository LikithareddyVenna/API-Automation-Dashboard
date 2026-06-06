const integrations = [
  {
    id: 1,
    name: "Razorpay",
    status: "Connected",
    type: "Payment Gateway",
  },
  {
    id: 2,
    name: "WhatsApp Business",
    status: "Connected",
    type: "Messaging",
  },
  {
    id: 3,
    name: "Gmail",
    status: "Not Connected",
    type: "Email",
  },
  {
    id: 4,
    name: "Slack",
    status: "Not Connected",
    type: "Communication",
  },
  {
    id: 5,
    name: "Webhook API",
    status: "Connected",
    type: "API",
  },
];

export default function IntegrationTable({ search }) {
  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">
    <div className="overflow-x-auto"></div>
      <h2 className="text-2xl font-semibold mb-6">
        Integrations
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="text-left py-4">Service</th>
            <th className="text-left py-4">Type</th>
            <th className="text-left py-4">Status</th>
            <th className="text-left py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredIntegrations.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="py-10 text-center text-gray-500"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  No integrations found
                </h3>

                <p className="mt-1">
                  Try changing your search.
                </p>
              </td>
            </tr>
          ) : (
          filteredIntegrations.map((integration) => (
            <tr
              key={integration.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4">
                {integration.name}
              </td>

              <td>{integration.type}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    integration.status === "Connected"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                  }`}
               >
                  {integration.status}
                </span>
              </td>

              <td>
                <button
                  className={`font-medium ${
                    integration.status === "Connected"
                      ? "text-indigo-600"
                      : "text-green-600"
                  }`}
                >
                  {integration.status === "Connected"
                    ? "Manage"
                    : "Connect"}
                </button>
              </td>
            </tr>
          ))
        )}
        </tbody>
      </table>
      
    </div>
  );
}