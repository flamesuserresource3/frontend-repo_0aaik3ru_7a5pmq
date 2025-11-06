const products = [
  {
    brand: "Red Bull",
    variants: [
      { name: "Original", size: "250 ml cans", packSizes: [4, 6, 12], img: "https://images.unsplash.com/photo-1595233829158-0cdf3f3f5f47?q=80&w=800&auto=format&fit=crop" },
      { name: "Sugarfree", size: "250 ml cans", packSizes: [4, 6, 12], img: "https://images.unsplash.com/photo-1542996966-7e8b4f2e2c02?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    brand: "Coca-Cola",
    variants: [
      { name: "Classic", size: "300 ml cans", packSizes: [6, 12], img: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=800&auto=format&fit=crop" },
      { name: "Zero", size: "300 ml cans", packSizes: [6, 12], img: "https://images.unsplash.com/photo-1589989937393-4d7c4b5a926d?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    brand: "Sprite",
    variants: [
      { name: "Lemon-Lime", size: "300 ml cans", packSizes: [6, 12], img: "https://images.unsplash.com/photo-1613478223719-3ffce9b30d19?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    brand: "Pepsi",
    variants: [
      { name: "Regular", size: "300 ml cans", packSizes: [6, 12], img: "https://images.unsplash.com/photo-1582752930081-2ac99759e413?q=80&w=800&auto=format&fit=crop" },
      { name: "Diet", size: "300 ml cans", packSizes: [6, 12], img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?q=80&w=800&auto=format&fit=crop" },
    ],
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop cartons</h2>
            <p className="text-gray-600">Choose brand, flavor and carton size. Images shown are representative.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((brand) => (
            <div key={brand.brand} className="rounded-xl bg-white border shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-3">{brand.brand}</h3>
              <div className="space-y-4">
                {brand.variants.map((v) => (
                  <div key={v.name} className="grid grid-cols-5 gap-3 items-center">
                    <img src={v.img} alt={`${brand.brand} ${v.name}`} className="col-span-2 h-24 w-full object-cover rounded-md"/>
                    <div className="col-span-3">
                      <p className="font-medium">{v.name}</p>
                      <p className="text-xs text-gray-500 mb-2">{v.size}</p>
                      <div className="flex flex-wrap gap-2">
                        {v.packSizes.map((p) => (
                          <button key={p} className="text-sm px-3 py-1.5 rounded-md border hover:bg-gray-50">
                            {p}-pack
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
