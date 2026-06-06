import { integrations } from "../../data/integrations";
import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import IntegrationStats from "../../components/stats/IntegrationStats";
import IntegrationCard from "../../components/cards/IntegrationCard";
import SearchBar from "../../components/search/SearchBar";
import CategoryFilter from "../../components/filters/CategoryFilter";
import EmptyState from "../../components/empty-state/EmptyState";
import { useState } from "react";
export default function Integration() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  
  const filteredIntegrations = integrations.filter(
  (integration) => {
    const matchesSearch =
      integration.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All Categories" ||
      integration.type.includes(categoryFilter);

    return matchesSearch && matchesCategory;
  }
);

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
      <IntegrationStats />
      <div className="flex flex-col md:flex-row gap-4">
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search integrations..."
      />
      <CategoryFilter
        value={categoryFilter}
        onChange={setCategoryFilter}
      />
      </div>
      {filteredIntegrations.length === 0 ? (
        <EmptyState
          title="No integrations found"
          message="Try changing your search."
        />
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            name={integration.name}
            status={integration.status}
            type={integration.type}
          />
        ))}
      </div>
      )}  
    </div>
  );
}

      
