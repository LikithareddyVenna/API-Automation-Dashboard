import StatusBadge from "./StatusBadge";

const payments = [
  {
    id: "#PAY001",
    amount: "₹2,500",
    status: "Success",
    date: "Today",
  },
  {
    id: "#PAY002",
    amount: "₹1,200",
    status: "Failed",
    date: "Today",
  },
  {
    id: "#PAY003",
    amount: "₹5,000",
    status: "Running",
    date: "Yesterday",
  },
];

export default function PaymentTable( { search, dateFilter, } ) {

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
              <td
                colSpan="5"
                className="py-10 text-center text-gray-500"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  No payments found
                </h3>

                <p className="mt-1">
                Try changing your search.
                </p>
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
  );
}