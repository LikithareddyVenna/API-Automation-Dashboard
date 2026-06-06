import PaymentStats from "../../components/stats/PaymentStats";
import PaymentTable from "../../components/table/PaymentTable";
import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import { useState } from "react";
import DateFilter from "../../components/filters/DateFilter";
import SearchBar from "../../components/search/SearchBar";
import {
  IndianRupee,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Payments() {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("All Dates");
   const loading = false;

  if (loading) {
    return <SpinnerLoader />;
  }
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <p className="text-gray-500 mt-2">
          Track transactions and revenue.
        </p>
      </div>

      {/* Stats Cards */}
      <PaymentStats />
      <div className="flex flex-col md:flex-row gap-4">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search payments..."
        />

        <DateFilter
          value={dateFilter}
          onChange={setDateFilter}
        />

      </div>
      {/* Payment Table */}
      <PaymentTable search={search} dateFilter={dateFilter} />

    </div>
  );
}