import { Tv, Shirt, Boxes, Archive, ChefHat, PanelTop } from 'lucide-react';

const interiors = [
  {
    icon: <PanelTop className="w-7 h-7" />,
    title: 'False Ceiling',
    room: 'Hall',
    description: 'Elegant layered false ceiling with ambient cove lighting to elevate the living space.',
  },
  {
    icon: <Tv className="w-7 h-7" />,
    title: 'TV Unit Cabinet',
    room: 'Hall',
    description: 'Custom-designed TV unit cabinet with premium laminate finish and concealed wiring.',
  },
  {
    icon: <Shirt className="w-7 h-7" />,
    title: 'Master Bedroom Wardrobe',
    room: 'Master Bedroom',
    description: 'Spacious full-height wardrobe with loft storage, mirror, and soft-close fittings.',
  },
  {
    icon: <Archive className="w-7 h-7" />,
    title: 'Second Bedroom Wardrobe',
    room: 'Second Bedroom',
    description: 'Single wardrobe unit with smart shelving and hanging space for everyday convenience.',
  },
  {
    icon: <Boxes className="w-7 h-7" />,
    title: 'Wooden Loft Storage',
    room: 'Bedrooms',
    description: 'Overhead wooden loft storage to maximize space without compromising on aesthetics.',
  },
  {
    icon: <ChefHat className="w-7 h-7" />,
    title: 'Modular Kitchen',
    room: 'Kitchen',
    description: 'Complete modular kitchen with granite countertop, full wooden cabinets, and storage shelves.',
  },
];

export default function Interiors() {
  return (
    <section id="interiors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">With Interiors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Move-In Ready Interiors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium finishes and thoughtful detailing included with every home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiors.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="flex items-start justify-between mb-5">
                <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md shadow-red-200 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  {item.room}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-10 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Everything Included</h3>
          <p className="text-red-100 max-w-2xl mx-auto">
            All interior finishes are part of the standard package — no hidden costs, no extra charges.
          </p>
        </div>
      </div>
    </section>
  );
}
