import IntegrationCard from "../../components/table/IntegrationTable";
import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import { useState } from "react";
export default function Integration() {
  const [search, setSearch] = useState("");
  const loading = false; //for testing
  if (loading){
    return <SpinnerLoader />;
  }
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Integrations
        </h1>

        <p className="text-gray-500 mt-2">
          Manage connected services.
        </p>
      </div>

      <input
      type="text"
      placeholder="Search integrations..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-80 px-4 py-2 border rounded-lg"
      />

      <IntegrationCard search={search} />

    </div>
  );
}

      
