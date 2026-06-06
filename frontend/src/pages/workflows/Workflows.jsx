import { useState } from "react";
import WorkflowTable from "../../components/table/WorkflowTable";
import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import SearchBar from "../../components/search/SearchBar";
import StatusFilter from "../../components/filters/StatusFilter";

export default function Workflows() {
  const loading = false; // testing

  if (loading) {
    return <SpinnerLoader />;
  }
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

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search workflows..."
        />

        <StatusFilter
          value={statusFilter}
          onChange={setStatusFilter}
        />

      </div>

      <WorkflowTable search={search} statusFilter={statusFilter} />

    </div>
  );
}