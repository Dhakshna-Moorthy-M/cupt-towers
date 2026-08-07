import { Car, Shield, Lock, Zap, Droplets, AlertCircle } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Car className="w-8 h-8" />, name: 'Covered Parking', description: 'Dedicated parking spaces' },
    { icon: <Shield className="w-8 h-8" />, name: '24/7 Security', description: 'Round-the-clock surveillance' },
    { icon: <Lock className="w-8 h-8" />, name: 'CCTV Monitoring', description: 'Complete coverage' },
    { icon: <Zap className="w-8 h-8" />, name: 'Power Backup', description: '100% backup available' },
    { icon: <Droplets className="w-8 h-8" />, name: 'Water Supply', description: '24/7 water facility' },
    { icon: <AlertCircle className="w-8 h-8" />, name: 'Fire Safety', description: 'Safety compliance' }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Amenities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience luxury living with premium amenities designed for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
            >
              <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
              <p className="text-gray-300">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-500 mb-2">100%</p>
              <p className="text-gray-300">Power Backup</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500 mb-2">24/7</p>
              <p className="text-gray-300">Water Supply</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500 mb-2">Premium</p>
              <p className="text-gray-300">Maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
