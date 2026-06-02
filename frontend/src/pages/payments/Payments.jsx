import StatusCard from "../../components/cards/StatusCard";
import PaymentTable from "../../components/table/PaymentTable";
import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import { useState } from "react";
import DateFilter from "../../components/filters/DateFilter";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatusCard
          title="Revenue"
          value="₹84K"
          growth="+12%"
          icon={IndianRupee}
          iconBg="bg-green-100 text-green-600"
        />

        <StatusCard
          title="Successful Payments"
          value="1245"
          growth="+8%"
          icon={CheckCircle}
          iconBg="bg-blue-100 text-blue-600"
        />

        <StatusCard
          title="Failed Payments"
          value="32"
          growth="-2%"
          icon={XCircle}
          iconBg="bg-red-100 text-red-600"
        />

      </div>
      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search payments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 md:w-80"
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