import {
  GitBranch,
  PlugZap,
  IndianRupee,
  Activity,
} from "lucide-react";
import ActivityTable from "../../components/table/ActivityTable";
import StatusCard from "../../components/cards/StatusCard";
import AnalyticsChart from "../../components/charts/AnalyticsChart";
import QuickActions from "../../components/actions/QuickActions";
export default function Dashboard() {
  const status= [
    {
      title: "Total Workflows",
      value: "25",
      growth: "+5.2%",
      icon: GitBranch,
      iconBg: "bg-blue-100 text-blue-600", 
    },
    { title: "Active Integrations", value: "32", growth: "+3.8%", icon: PlugZap, iconBg: "bg-purple-100 text-purple-600" },
    { title: "Total Transactions", value: "84K", growth: "+7.1%", icon: IndianRupee , iconBg: "bg-green-100 text-green-600" },
    { title: "API Requests", value: "1.2M", growth: "+2.3%", icon: Activity, iconBg: "bg-orange-100 text-orange-600" },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="
      absolute
      top-0
      right-0
      w-96
      h-96
      bg-purple-400/20
      rounded-full
      blur-3xl
      -z-10
    "></div>

    <div className="
      absolute
      bottom-0
      left-0
      w-96
      h-96
      bg-blue-400/20
      rounded-full
      blur-3xl
      -z-10
    "></div>

    {/* Hero Section */}
    <div className="
      relative
      overflow-hidden
      mb-8
      p-8
      rounded-3xl
      bg-gradient-to-br
      from-indigo-500
      via-purple-500
      to-blue-500
      text-white
      shadow-xl
    ">
      <div className="
        absolute
        -top-10
        -right-10
        w-40
        h-40
        bg-white/10
        rounded-full
        blur-2xl
      "></div>

      <div className="
        absolute
        bottom-0
        right-20
        w-24
        h-24
        bg-purple-300/20
        rounded-full
        blur-2xl
      "></div>
        <h1 className="text-5xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-white/80 text-lg mt-2">
          Monitor your workflows and automation systems
        </p>
        <div className="flex items-center gap-6 mt-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <p className="text-sm text-white/90 font-medium">
              Systems Operational
            </p>
          </div>

          <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>

          <p className="text-sm text-white/90 font-medium">
            99.98% Uptime
          </p>
        </div>

  </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {status.map((item, index) => (
          <StatusCard
            key={index}
            title={item.title}
            value={item.value} 
            growth={item.growth}
            icon={item.icon}
            iconBg={item.iconBg}
          />
        ))}
      </div>
      <div className="mt-10">
        <ActivityTable />
      </div>
      <div className="mt-10">
        <AnalyticsChart />
      </div>
      <div className="mt-10">
        <QuickActions />
      </div>
    </div>  
  );
}
           