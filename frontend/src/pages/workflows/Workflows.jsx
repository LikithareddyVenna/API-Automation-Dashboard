import { useState } from "react";
import WorkflowTable from "../../components/table/WorkflowTable";

export default function Workflows() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Workflows
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and monitor automation workflows.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex justify-between items-center">

        <input
          type="text"
          placeholder="Search workflows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-72"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>All Status</option>
          <option>Success</option>
          <option>Failed</option>
          <option>Running</option>
        </select>

      </div>

      <WorkflowTable search={search} statusFilter={statusFilter} />

    </div>
  );
}