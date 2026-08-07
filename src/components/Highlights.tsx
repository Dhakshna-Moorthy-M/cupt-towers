import { Building2, Home, Layers, IndianRupee } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Total Units',
      value: '19 Units',
      description: 'Premium 2 BHK apartments'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Floors',
      value: 'Stilt + 5 Floors',
      description: 'Modern structure'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Flat Type',
      value: '2 BHK',
      description: 'Spacious apartments'
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: 'Starting Price',
      value: '₹9,500/sqft*',
      description: 'Best value in area'
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Project Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional features that make CUPT Towers stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">{highlight.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">{highlight.value}</p>
              <p className="text-gray-500">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
