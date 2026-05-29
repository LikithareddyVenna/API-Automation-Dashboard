
export default function QuickActions() {
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

      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="
          bg-indigo-50
          border border-indigo-100
          rounded-2xl
          p-5
          cursor-pointer
          hover:shadow-lg
          hover:-translate-y-1
          transition-all
          duration-300
        ">
          <div className="text-3xl mb-3">⚡</div>

          <h3 className="font-semibold text-slate-900">
            Create Workflow
          </h3>

          <p  className="text-sm text-slate-500 mt-2">
            Build and manage automation pipelines
          </p>
        </div>

        <div className="
          bg-green-50
          border border-green-100
          rounded-2xl
          p-5
          cursor-pointer
          hover:shadow-lg
          hover:-translate-y-1
          transition-all
          duration-300
        ">
        <div className="text-3xl mb-3">🔌</div>

        <h3 className="font-semibold text-slate-900">
          Add Integration
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          Connect external services and APIs
        </p>
      </div>
    

      <div className="
        bg-orange-50
        border border-orange-100
        rounded-2xl
        p-5
        cursor-pointer
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
      ">
        <div className="text-3xl mb-3">🔔</div>

        <h3 className="font-semibold text-slate-900">
          Send Alert
        </h3>

        <p className="text-sm text-slate-500 mt-2">
         Notify users through configured channels
        </p>
      </div>
  

      <div className="
        bg-purple-50
        border border-purple-100
        rounded-2xl
        p-5
        cursor-pointer
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
      ">
        <div className="text-3xl mb-3">📊</div>

        <h3 className="font-semibold text-slate-900">
          Generate Report
        </h3>

        <p className="text-sm text-slate-500 mt-2">
         Export workflow and analytics summaries
        </p>
      </div>

    </div>
    </div>
  );
}