import { MapPin, School, Cross, ShoppingCart, Plane, Brain as Train } from 'lucide-react';

export default function Location() {
  const nearbyPlaces = [
    { icon: <MapPin className="w-5 h-5" />, name: 'Tidel Park', distance: 'Within 1 km', places: 'IT Park' },
    { icon: <ShoppingCart className="w-5 h-5" />, name: 'Avinashi Road', distance: 'Within 1 km', places: 'Major commercial hub' },
    { icon: <ShoppingCart className="w-5 h-5" />, name: 'Shopping Centers', distance: 'Within 2 km', places: 'Multiple retail hubs' },
    { icon: <ShoppingCart className="w-5 h-5" />, name: 'Fun Mall', distance: 'Within 3 km', places: 'Entertainment & shopping' },
    { icon: <ShoppingCart className="w-5 h-5" />, name: 'Broadway Mall', distance: 'Within 5 km', places: 'Premium shopping' },
    { icon: <ShoppingCart className="w-5 h-5" />, name: 'D-Mart Shopping', distance: 'Within 5 km', places: 'Daily essentials' },
    { icon: <Plane className="w-5 h-5" />, name: 'Airport', distance: 'Within 5 km', places: 'International connectivity' },
    { icon: <Cross className="w-5 h-5" />, name: 'PSG Hospital', distance: 'Within 5 km', places: 'Multi-specialty hospital' },
    { icon: <Cross className="w-5 h-5" />, name: 'KMCH Hospital', distance: 'Within 6 km', places: 'Premier healthcare' },
    { icon: <Train className="w-5 h-5" />, name: 'Railway Station', distance: 'Within 8 km', places: 'Coimbatore Junction' }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Prime Location</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategically located in Coimbatore with excellent connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Address</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                TS No: 129, 130, 132<br />
                Ragavendra Nagar<br />
                (Opp) Hitec City<br />
                Maheswari Nagar 4th Street<br />
                Peelamedu - Post<br />
                Coimbatore - 641001
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2">Coordinates</p>
                <p className="text-sm text-red-600 font-semibold">11.0264320, 76.9785856</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                      {place.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{place.name}</h4>
                      <p className="text-sm text-red-600 font-medium">{place.distance}</p>
                      <p className="text-xs text-gray-500 mt-1">{place.places}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden relative group h-96">
            <a href="https://maps.app.goo.gl/e9AJPjBZ6bCJ79U38?g_st=awb" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img src="/MAP.png" alt="CUPT Towers Location Map" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 cursor-pointer" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <span className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">Open in Google Maps</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
