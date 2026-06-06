export default function ProfileSettings() {
  return (
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
  );
}