import { useMemo, useState } from "react";

// Simple estimator: base per-can cost and margin + delivery via bike/courier
// Example numbers for Red Bull: cost 91, typical MRP 115-120. We'll price in bulk packs
// We expose knobs so users can see transparent pricing and you can tweak later.

const PRODUCTS = {
  "Red Bull": { baseCost: 91, mrp: 120 },
  "Coca-Cola": { baseCost: 35, mrp: 45 },
  Sprite: { baseCost: 30, mrp: 40 },
  Pepsi: { baseCost: 32, mrp: 45 },
};

const PACK_OPTIONS = [4, 6, 12];

export default function PricingEstimator() {
  const [brand, setBrand] = useState("Red Bull");
  const [pack, setPack] = useState(6);
  const [marginPct, setMarginPct] = useState(12); // your margin percent
  const [deliveryKm, setDeliveryKm] = useState(8);

  const result = useMemo(() => {
    const p = PRODUCTS[brand];
    const canCost = p.baseCost; // your landed cost per unit

    // Delivery model: base 35 + 6 per km (proxy for partner cost). You can tune later.
    const deliveryCost = 35 + 6 * Math.max(0, deliveryKm - 2);

    const packCost = canCost * pack;
    const margin = (marginPct / 100) * packCost;

    // Platform/ops fee buffer (payment gateway + packing)
    const opsFee = 8 + 0.02 * packCost;

    const subtotal = packCost + margin + opsFee + deliveryCost;

    // Round to neat pricing endings
    const nice = Math.round(subtotal / 5) * 5;

    const unitPrice = nice / pack;

    return {
      canCost,
      deliveryCost,
      packCost,
      margin,
      opsFee,
      subtotal,
      nice,
      unitPrice,
    };
  }, [brand, pack, marginPct, deliveryKm]);

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Price estimator</h2>
        <p className="text-gray-600 mb-6">
          Transparent bulk pricing. Select brand and carton size to estimate a fair selling price that covers delivery and overheads while staying competitive.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Brand</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full rounded-md border-gray-300">
              {Object.keys(PRODUCTS).map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Carton size</label>
            <select value={pack} onChange={(e) => setPack(Number(e.target.value))} className="w-full rounded-md border-gray-300">
              {PACK_OPTIONS.map((p) => (
                <option key={p} value={p}>{p} pack</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Your margin %</label>
            <input type="range" min={5} max={25} value={marginPct} onChange={(e)=>setMarginPct(Number(e.target.value))} className="w-full"/>
            <div className="text-sm text-gray-600">{marginPct}%</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-medium">Estimated distance (km)</label>
            <input type="number" min={1} value={deliveryKm} onChange={(e)=>setDeliveryKm(Number(e.target.value))} className="w-full rounded-md border-gray-300"/>
          </div>
        </div>

        <div className="rounded-xl border bg-white shadow-sm p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Per-unit cost</span><span>₹{result.canCost.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Carton cost ({pack} pcs)</span><span>₹{result.packCost.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Ops & packing</span><span>₹{result.opsFee.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Delivery estimate</span><span>₹{result.deliveryCost.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Margin @ {marginPct}%</span><span>₹{result.margin.toFixed(0)}</span></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between font-semibold text-gray-900"><span>Suggested selling price</span><span>₹{result.nice.toFixed(0)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Per-unit price</span><span>₹{result.unitPrice.toFixed(0)}</span></div>
              <p className="text-xs text-gray-500 pt-2">Round figures are for guidance. Actual courier fees may vary by time and distance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
