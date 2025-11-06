import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import PricingEstimator from "./components/PricingEstimator";
import HowItWorks from "./components/HowItWorks";

function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-900">BulkBeverage</p>
          <p className="mt-2">Bulk soft drinks and energy drinks for house parties at wholesale-style prices.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Support</p>
          <ul className="mt-2 space-y-1">
            <li><a href="#how" className="hover:text-gray-900">How it works</a></li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#catalog" className="hover:text-gray-900">Catalog</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Legal</p>
          <ul className="mt-2 space-y-1">
            <li>Images shown are for representation only.</li>
            <li>All trademarks belong to their respective owners.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar/>
      <Hero/>
      <Catalog/>
      <PricingEstimator/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
