import React from "react";

export default function Process({id}) {
  const steps = [
    {
      title: "Reward Instantly",
      description:
        "Automatically allocate reward points for every transaction, reducing cash handling hassles.",
      iconColor: "text-yellow-400",
    },
    {
      title: "Smart Customer Engagement",
      description:
        "Push targeted promotions to customers’ iOS and Android apps, increasing engagement and loyalty.",
      iconColor: "text-pink-500",
    },
    {
      title: "Insightful Dashboard",
      description:
        "Track engagement, offers, and client feedback easily with a clear admin UI.",
      iconColor: "text-green-400",
    },
    {
      title: "Fast & Secure Checkout",
      description:
        "Persistent user data across franchises ensures smooth transactions every time.",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id={id} className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Steps */}
            <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-extrabold mb-4">How Zimora Works</h2>
            <p className="text-lg text-gray-600 mb-6">
                Simplifying your business in 4 easy steps
            </p>

            {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${step.iconColor}`}>
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"></path>
                    </svg>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                </div>
            ))}
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/2">
            <img
                src="/zimora-preview.png"
                alt="Zimora app preview"
                className="rounded-xl shadow-lg w-full h-96 object-contain"
                />
            </div>
        </div>
        </section>

  );
}
