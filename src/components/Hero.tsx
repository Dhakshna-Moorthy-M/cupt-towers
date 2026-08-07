import { MapPin, Home } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen pt-20">
      <div className="absolute inset-0">
        <img
          src="/Elevation.jpeg"
          alt="CUPT Towers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Spacious Living with Good Interiors</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            CUPT Towers
          </h1>

          <p className="text-2xl md:text-3xl mb-6 text-gray-200">
            Your Dream Home Awaits
          </p>

          <div className="flex items-center gap-2 mb-8 text-lg">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Home className="w-5 h-5" />
              <span>Luxury Apartments</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span>2 BHK</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule a Visit
            </button>
            <button
              onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              Explore Features
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
