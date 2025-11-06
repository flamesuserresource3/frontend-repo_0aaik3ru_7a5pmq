import { ShoppingCart, Truck, Clock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold">BB</span>
          <span className="text-lg font-semibold tracking-tight">BulkBeverage</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#catalog" className="hover:text-gray-900">Catalog</a>
          <a href="#pricing" className="hover:text-gray-900">Price Estimator</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-4 text-gray-600">
            <span className="inline-flex items-center gap-1"><Clock size={16}/> 5-hr scheduling</span>
            <span className="inline-flex items-center gap-1"><Truck size={16}/> Citywide delivery</span>
          </div>
          <a href="#catalog" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-md">
            <ShoppingCart size={16}/> Shop cartons
          </a>
        </div>
      </div>
    </header>
  );
}
