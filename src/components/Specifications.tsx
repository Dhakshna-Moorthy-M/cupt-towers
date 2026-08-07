import { CheckCircle } from 'lucide-react';

export default function Specifications() {
  const specs = {
    structure: [
      'RCC framed structure',
      'Earthquake resistant design',
      'Premium quality cement',
      'High-grade steel reinforcement'
    ],
    flooring: [
      'Vitrified tiles in living & bedrooms',
      'Anti-skid tiles in bathrooms',
      'Premium granite in kitchen',
      'Marble flooring in entrance lobby'
    ],
    kitchen: [
      'Modular kitchen platform',
      'Granite counter top',
      'Stainless steel sink',
      'Provision for water purifier'
    ],
    bathroom: [
      'Premium branded fittings',
      'Designer tiles',
      'Hot & cold water mixer',
      'Concealed plumbing'
    ],
    doors: [
      'Teak wood frame for main door',
      'Premium quality hardware',
      'Hardwood frames for internal doors',
      'UPVC windows with mesh'
    ],
    electrical: [
      'Branded modular switches',
      'Concealed copper wiring',
      'TV & telephone points',
      'Power backup for common areas'
    ]
  };

  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Specifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Premium Quality Standards</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with the finest materials and superior craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Structure</h3>
            <ul className="space-y-3">
              {specs.structure.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Flooring</h3>
            <ul className="space-y-3">
              {specs.flooring.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Kitchen</h3>
            <ul className="space-y-3">
              {specs.kitchen.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Bathroom</h3>
            <ul className="space-y-3">
              {specs.bathroom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Doors & Windows</h3>
            <ul className="space-y-3">
              {specs.doors.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Electrical</h3>
            <ul className="space-y-3">
              {specs.electrical.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
