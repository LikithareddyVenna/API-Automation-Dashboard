import StatusBadge from "./StatusBadge";
import { payments } from "../../data/payments";
import EmptyState from "../empty-state/EmptyState";
import SkeletonLoader from "../loaders/SkeletonLoader";
export default function PaymentTable( { search, dateFilter, } ) {
  const loading = false; //for testing
  if (loading) {
    return <SkeletonLoader />;
  }
  const filteredPayments = payments.filter((payment) =>
    {
      const matchesSearch = 
      payment.id
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDate =
      dateFilter === "All Dates" ||
      payment.date === dateFilter;

      return matchesSearch && matchesDate;
    });
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Transactions
        </h2>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">

        <thead>
          <tr className="border-b text-gray-500">
            <th className="text-left py-4">Order ID</th>
            <th className="text-left py-4">Amount</th>
            <th className="text-left py-4">Status</th>
            <th className="text-left py-4">Date</th>
            <th className="text-left py-4">Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredPayments.length === 0 ? (
            <tr>
              <td colSpan="5">
                <EmptyState
                  title="No payments found"
                  message="Try changing your search."
                />
              </td>
            </tr> 
          ) : (
          filteredPayments.map((payment) => (
            <tr
              key={payment.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4">{payment.id}</td>

              <td>{payment.amount}</td>

              <td>
                <StatusBadge status={payment.status} />
              </td>

              <td>{payment.date}</td>

              <td>
                <button className="text-indigo-600 hover:underline">
                  View
                </button>
              </td>
            </tr>
          ))
        )}
        </tbody>

      </table>
      </div>
    </div>
  );
}