import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import ProfileSettings from "../../components/settings/ProfileSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import ApiKeySettings from "../../components/settings/ApiKeySettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
export default function Settings() {
    const loading = false; // testing

  if (loading) {
    return <SpinnerLoader />;
  }
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage account preferences.
        </p>
      </div>
  
      <ProfileSettings />
      <NotificationSettings />
      <ApiKeySettings />
      <SecuritySettings />
    </div>
  );
}