import React, { useState } from "react";
import { Activity } from "lucide-react";
import StatusBadge from "./StatusBadge";
const activities = [
  {
    workflow: "Payment Sync",
    status: "Success",
    trigger: "Webhook",
    duration: "1.2s",
    date: "2 mins ago",
  },

  {
    workflow: "WhatsApp Alert",
    status: "Failed",
    trigger: "API",
    duration: "0.8s",
    date: "5 mins ago",
  },

  {
    workflow: "Razorpay Hook",
    status: "Running",
    trigger: "Manual",
    duration: "2.5s",
    date: "10 mins ago",
  },
];
export default function ActivityTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredActivities = activities.filter((activity) =>
    activity.workflow.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="
      bg-white/90
      backdrop-blur-sm
      mt-8
      p-7
      rounded-3xl
      border
      border-gray-100
      shadow-sm
      hover:shadow-md
      transition-all
      duration-300
    ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div>
        <div className="flex items-center gap-3">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-indigo-100
            text-indigo-600
            flex
            items-center
            justify-center
          ">
            <Activity size={22} />
          </div>

          <div>
            <h2 className="text-xl font-semibold       text-slate-900">
              Recent Activity
            </h2>

            <p className="text-sm text-slate-500">
              Track workflow executions and automation events
            </p>
          </div>

        </div>
      </div>  

        <div className="flex items-center gap-3">

          <input
            type="text"
            placeholder="Search workflows..."
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="text-blue-600 text-sm font-medium">
          View All
          </button>

        </div>

      </div>
      <hr className="my-4" />
        <div className="overflow-x-auto">
          <div className="min-w-[950px]">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-2 text-left text-gray-500 text-sm font-medium whitespace-nowrap pb-3">
            <p>Workflow</p>
            <p>Status</p>
            <p>Trigger</p>
            <p>Duration</p>
            <p>Date</p>
            <p>Action</p>
            </div>
          </div>
          {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={activity.workflow}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 text-left items-center py-4 px-4 border-b border-gray-200 rounded-2xl hover:bg-white
              hover:shadow-sm transition-all duration-300"
            >
              <p className="font-medium">{activity.workflow}</p>
              <StatusBadge status={activity.status} />
              <p>{activity.trigger}</p>
              <p>{activity.duration}</p>
              <p>{activity.date}</p>
              <div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          ))
          ) : (
          <div className="text-center py-10 text-gray-500">
            No recent activity available.
          </div>
        )}
      </div>  
    </div>
  );
}
