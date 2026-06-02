import SpinnerLoader from "../../components/loaders/SpinnerLoader";
export default function Settings() {
    const loading = false; // testing

  if (loading) {
    return <SpinnerLoader />;
  }
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage account preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Profile Information
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
            Save Changes
          </button>

        </div>

      </div>

      {/* Notifications */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Notifications
        </h2>

        <div className="space-y-3">

          <label className="flex justify-between">
            Email Notifications
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between">
            Workflow Alerts
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between">
            Payment Alerts
            <input type="checkbox" />
          </label>

        </div>

      </div>

      {/* API Key */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          API Keys
        </h2>

        <div className="flex justify-between items-center">

          <code>
            sk_live_xxxxxxxxxxxxxxxxx
          </code>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">
            Regenerate
          </button>

        </div>

      </div>

    </div>
  );
}