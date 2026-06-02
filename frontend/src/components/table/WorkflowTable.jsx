import StatusBadge from "./StatusBadge";
import TableLoader from "../loaders/TableLoader";
const workflows = [
  {
    id: 1,
    name: "Payment Sync",
    status: "Success",
    trigger: "Webhook",
    runs: 125,
    lastRun: "2 mins ago",
  },
  {
    id: 2,
    name: "WhatsApp Alert",
    status: "Failed",
    trigger: "API",
    runs: 98,
    lastRun: "5 mins ago",
  },
  {
    id: 3,
    name: "Razorpay Hook",
    status: "Running",
    trigger: "Manual",
    runs: 45,
    lastRun: "10 mins ago",
  },
];

export default function WorkflowTable({ search , statusFilter }) {
   const loading = false;  //for testing
  const filteredWorkflows = workflows.filter((workflow) => {
    const matchesSearch =
      workflow.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" ||
      workflow.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  
  if (loading) {  
    return <TableLoader />;
    }
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Workflow List
        </h2>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Create Workflow
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-4">Workflow</th>
              <th className="text-left py-4">Status</th>
              <th className="text-left py-4">Trigger</th>
              <th className="text-left py-4">Runs</th>
              <th className="text-left py-4">Last Run</th>
              <th className="text-left py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredWorkflows.length === 0 ? (
              <tr>
                <td colSpan="6" 
                className="py-10 text-center text-gray-500">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      No workflows found
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Try changing your search or filter.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredWorkflows.map((workflow) => (
                <tr
                  key={workflow.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-5 font-medium">
                    {workflow.name}
                  </td>

                  <td>
                    <StatusBadge status={workflow.status} />
                  </td>

                  <td>{workflow.trigger}</td>

                  <td>{workflow.runs}</td>

                  <td>{workflow.lastRun}</td>

                  <td>
                    <button className="text-indigo-600 font-medium hover:underline">
                      View Details
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