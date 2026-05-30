export default function IntegrationCard({ name, status }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition">

      <h3 className="text-xl font-semibold">
        {name}
      </h3>

      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "Connected"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>

      <button
        className={`mt-6 px-4 py-2 rounded-lg text-white ${
          status === "Connected"
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {status === "Connected" ? "Manage" : "Connect"}
      </button>

    </div>
  );
}