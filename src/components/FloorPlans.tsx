import { useState } from 'react';
import { Bed, Bath } from 'lucide-react';

const floorData = [
  {
    type: 'Floors 1–4',
    area: 'Typical Floor',
    bedrooms: 2,
    bathrooms: 2,
    image: '/Floors_1-4.jpg',
    features: ['Multiple 2 BHK units per floor', 'Spacious living areas', 'Modern kitchen', 'Attached balconies', 'Premium finishes'],
    units: [
      { flat: 'A', type: '2 BHK', area: 1007 },
      { flat: 'B', type: '2 BHK', area: 1024 },
      { flat: 'C', type: '2 BHK', area: 1095 },
      { flat: 'D', type: '2 BHK', area: 1014 },
    ],
    floors: [1, 2, 3, 4],
  },
  {
    type: '5th Floor',
    area: 'Top Floor',
    bedrooms: 2,
    bathrooms: 2,
    image: '/5th_Floor.jpg',
    features: ['Open terrace access', 'Enhanced ventilation', 'Premium 2 BHK units', 'Scenic views', 'Luxury finishes'],
    units: [
      { flat: 'A', type: '2 BHK', area: 1007 },
      { flat: 'B', type: '2 BHK', area: 1031 },
      { flat: 'C', type: '2 BHK', area: 1101 },
    ],
    floors: [5],
  },
];

export default function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const plan = floorData[selectedPlan];

  return (
    <section id="floor-plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Floor Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Choose Your Perfect Home</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtfully designed floor plans for every lifestyle
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {floorData.map((p, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                selectedPlan === index
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {p.type}
              <br />
              <span className="text-sm opacity-80">{p.area}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-2 shadow-lg overflow-hidden">
            <img
              src={plan.image}
              alt={`${plan.type} Floor Plan`}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="sticky top-20 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{plan.type}</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Bed className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-gray-900">{plan.bedrooms}</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Bath className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-gray-900">{plan.bathrooms}</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
            </div>

            {/* Flat area table */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-red-600">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Unit-wise Area Breakdown</h4>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-50 text-gray-600 text-xs uppercase tracking-wide">
                    <th className="px-5 py-3 text-left font-semibold">Floor</th>
                    <th className="px-5 py-3 text-left font-semibold">Flat</th>
                    <th className="px-5 py-3 text-left font-semibold">Type</th>
                    <th className="px-5 py-3 text-right font-semibold">Area (Sq. Ft.)</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.floors.flatMap((floor) =>
                    plan.units.map((unit, i) => (
                      <tr
                        key={`${floor}-${unit.flat}`}
                        className={`border-t border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="px-5 py-3 text-gray-700 font-medium">{floor}</td>
                        <td className="px-5 py-3 text-gray-700">{unit.flat}</td>
                        <td className="px-5 py-3">
                          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">{unit.type}</span>
                        </td>
                        <td className="px-5 py-3 text-right font-bold text-gray-900">{unit.area.toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-base font-bold mb-3 text-gray-900">Key Features</h4>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
