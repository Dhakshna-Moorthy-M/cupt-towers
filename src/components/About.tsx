import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">About Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Welcome to CUPT Towers
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CUPT Towers represents the perfect blend of modern architecture and comfortable living in the heart of Coimbatore. Designed for contemporary lifestyles, the project offers spacious apartments with excellent natural lighting, proper ventilation, and thoughtfully planned interiors that create a refreshing and elegant living experience. With premium amenities and quality construction, CUPT Towers sets a new benchmark for modern living in the city.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The project is proudly associated with Gujan Builders, one of the most reputed builders in Tamil Nadu and Coimbatore, known for its commitment to quality and excellence. Construction contractor Welly Construction reflects superior craftsmanship, durability, and contemporary design standards.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Prime Location</h4>
                  <p className="text-gray-600">Strategic location with excellent connectivity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Construction</h4>
                  <p className="text-gray-600">High-quality materials and superior craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Amenities</h4>
                  <p className="text-gray-600">Complete range of lifestyle facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Elevation.jpeg"
                alt="CUPT Towers Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-8 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
