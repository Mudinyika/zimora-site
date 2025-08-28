import React from "react";

export default function ConnectCustomers({id}) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1629721671030-a83edbb11211?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Targeted Ads on Mobile"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

       {/* Right side - Text */}
        <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Connect with Customers
        </h2>
        <p className="text-lg text-gray-700 mb-8">
            Send tailored ads directly to your clients, push notifications, or WhatsApp campaigns to customers near your shop — works on iPhone and Android devices.
        </p>

        <div className="space-y-6">
            <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                Targeted Ads
            </h3>
            <p className="text-gray-700">
                Send personalized promotions to all your clients or focus on specific customer segments.
            </p>
            </div>

            <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                Location & Proximity Notifications
            </h3>
            <p className="text-gray-700">
                Messages automatically appear when customers are near your shop or within a specific area, maximizing engagement.
            </p>
            </div>

            <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                WhatsApp & Push Campaigns
            </h3>
            <p className="text-gray-700">
                Reach your audience via WhatsApp messages or push notifications without requiring them to download any app.
            </p>
            </div>
        </div>
        </div>

      </div>
    </section>
  );
}
