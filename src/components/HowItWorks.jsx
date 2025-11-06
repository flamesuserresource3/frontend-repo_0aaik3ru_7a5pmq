import { Calendar, Package, Truck, Wallet } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: Calendar, title: "Schedule ahead", desc: "Place orders at least 5 hours in advance to guarantee on-time delivery." },
    { icon: Package, title: "Pick cartons", desc: "Choose 4–12 piece packs of top brands and flavors at wholesale-style prices." },
    { icon: Wallet, title: "Pay online", desc: "Secure checkout. We handle packing and pickup with our courier partner." },
    { icon: Truck, title: "Delivered same day", desc: "Rider brings it to your door within your chosen window." },
  ];

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">How it works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl bg-white border shadow-sm p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
