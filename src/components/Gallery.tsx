import { Image } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Project Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and elegance of CUPT Towers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Elevation.jpeg"
              alt="CUPT Towers Elevation"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div>
                <p className="text-white text-xl font-semibold">CUPT Towers</p>
                <p className="text-gray-200 text-sm">Premium 2 BHK Apartments in Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
