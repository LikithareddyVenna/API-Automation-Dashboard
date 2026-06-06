export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-4">
        Notifications
      </h2>

      <div className="space-y-3">

        <label className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between items-center">
          <span>Workflow Alerts</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between items-center">
          <span>Payment Alerts</span>
          <input type="checkbox" />
        </label>

        <label className="flex justify-between items-center">
          <span>Integration Updates</span>
          <input type="checkbox" defaultChecked />
        </label>

      </div>

    </div>
  );
}