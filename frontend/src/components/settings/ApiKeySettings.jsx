export default function ApiKeySettings() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-4">
        API Keys
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <code className="bg-gray-100 px-4 py-3 rounded-lg overflow-x-auto">
          sk_live_xxxxxxxxxxxxxxxxx
        </code>

        <div className="flex gap-2">

          <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
            Copy
          </button>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800">
            Regenerate
          </button>

        </div>

      </div>

    </div>
  );
}