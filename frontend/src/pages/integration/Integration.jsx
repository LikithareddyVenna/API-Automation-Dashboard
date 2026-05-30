import IntegrationCard from "../../components/cards/IntegrationCard";
export default function Integration() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Integrations
        </h1>

        <p className="text-gray-500 mt-2">
          Manage connected services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <IntegrationCard
          name="Razorpay"
          status="Connected"
        />

        <IntegrationCard
          name="WhatsApp Business"
          status="Connected"
        />

        <IntegrationCard
          name="Gmail"
          status="Not Connected"
        />

        <IntegrationCard
          name="Slack"
          status="Not Connected"
        />

        <IntegrationCard
          name="Webhook API"
          status="Connected"
        />

      </div>

    </div>
  );
}