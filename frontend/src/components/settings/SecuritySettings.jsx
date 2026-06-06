export default function SecuritySettings() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-4">
        Security Settings
      </h2>

      <div className="space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
          Update Password
        </button>

      </div>

    </div>
  );
}