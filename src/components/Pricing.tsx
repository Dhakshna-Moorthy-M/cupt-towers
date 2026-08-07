import { IndianRupee, Gift, Phone } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      type: '2 BHK',
      area: 'Typical Unit',
      basePrice: '₹9,500/sqft*',
      features: ['Spacious living & dining', 'Modern modular kitchen', 'Two bedrooms with attached baths', 'Premium finishes', 'Covered parking included', '24/7 security'],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Investment Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect home that fits your budget and lifestyle
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden ring-4 ring-red-600">
            <div className="bg-red-600 text-white text-center py-3 text-sm font-semibold">
              ONLY 2 BHK AVAILABLE
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-4xl font-bold mb-2 text-gray-900">{packages[0].type}</h3>
              <p className="text-gray-600 mb-8 text-lg">{packages[0].area}</p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Investment Plan Starting Price</p>
                <p className="text-5xl font-bold text-red-600">₹9,500/sqft*</p>
                <p className="text-sm text-gray-500 mt-2">*Final price varies based on unit specifications</p>
              </div>

              <h4 className="text-lg font-semibold mb-4 text-gray-900">Premium Features</h4>
              <ul className="space-y-3 mb-8">
                {packages[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                Get Pricing Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Gift className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Special Offers Available</h3>
              <ul className="space-y-2 text-lg">
                <li>Early bird discounts</li>
                <li>Flexible payment plans</li>
                <li>Home loan assistance</li>
                <li>Zero registration charges</li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl mb-4">Contact us for exclusive pricing</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Talk to Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
