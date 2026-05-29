export default function StatusBadge({ status }) {

  const statusStyles = {
    Success: "bg-green-100 text-green-600",
    Failed: "bg-red-100 text-red-600",
    Running: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600", 

  };
    
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium w-fit ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
} 