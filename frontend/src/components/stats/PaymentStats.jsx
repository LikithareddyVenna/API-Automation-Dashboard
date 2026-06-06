import StatusCard from "../cards/StatusCard";
import {
  IndianRupee,
  CheckCircle,
  XCircle,
  CreditCard,
} from "lucide-react";

export default function PaymentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

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

      <StatusCard
        title="Transactions"
        value="1277"
        growth="+10%"
        icon={CreditCard}
        iconBg="bg-purple-100 text-purple-600"
      />

    </div>
  );
}