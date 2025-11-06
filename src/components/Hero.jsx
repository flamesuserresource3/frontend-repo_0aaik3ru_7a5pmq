import { Star, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Bulk beverages for house parties — delivered same day
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Order 4–12 pack cartons of your favorite soft drinks and energy drinks at wholesale-style prices. Schedule delivery at least 5 hours ahead — perfect for parties and events.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">
              Shop cartons
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-semibold hover:bg-gray-50">
              Price estimator
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1"><Clock size={16}/> 5-hr advance scheduling</span>
            <span className="inline-flex items-center gap-1"><Star size={16} className="text-yellow-500"/> Trusted by party hosts</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border bg-white p-4 shadow-sm grid grid-cols-2 gap-4">
            {[
              {name: 'Red Bull', img: 'https://images.unsplash.com/photo-1595233829158-0cdf3f3f5f47?q=80&w=800&auto=format&fit=crop', size: '250 ml cans'},
              {name: 'Coca-Cola', img: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=800&auto=format&fit=crop', size: '300 ml cans'},
              {name: 'Sprite', img: 'https://images.unsplash.com/photo-1613478223719-3ffce9b30d19?q=80&w=800&auto=format&fit=crop', size: '300 ml cans'},
              {name: 'Pepsi', img: 'https://images.unsplash.com/photo-1582752930081-2ac99759e413?q=80&w=800&auto=format&fit=crop', size: '300 ml cans'},
            ].map((i) => (
              <div key={i.name} className="rounded-lg overflow-hidden border">
                <img src={i.img} alt={i.name} className="h-36 w-full object-cover"/>
                <div className="p-3">
                  <p className="font-medium">{i.name}</p>
                  <p className="text-xs text-gray-500">{i.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
