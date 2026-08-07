import { Award, Building, Shield, Users } from 'lucide-react';

export default function Builder() {
  return (
    <section id="builder" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">About Builder</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Built on Trust & Excellence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Decades of experience in service and commitment to quality
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 flex flex-col items-center justify-center">
              <img src="/Builder_image.png" alt="Founder, CUPT Group" className="w-80 object-contain rounded-2xl shadow-lg" />
              <h3 className="text-2xl font-bold text-gray-900 text-center mt-6">Founder</h3>
              <p className="text-red-600 font-semibold text-center mt-2">CUPT Group</p>
            </div>

            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">CUPT - A Legacy of Trust</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The legacy of CUPT began with Mettupalayam Auto Service, a well-recognized name in the transport and automobile service industry for over five decades. Under the leadership of Ravi, the organization earned strong recognition as a trusted bus operator and towing service provider, partnering with leading premium automobile brands including BMW, Mercedes-Benz, Audi, Volkswagen, and Volvo for professional towing and recovery services. He also serves as the President of the Towing Truck Association of Tamil Nadu, reflecting his longstanding contribution to the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Across Coimbatore, CUPT (Coimbatore Urban Peoples Transport) has built a strong legacy in automobile services, providing quick and reliable racing event support, professional towing, recovery, and multi-axle vehicle handling across five districts. As a government-recognised and proven service provider associated with the Transport, Traffic, and Police departments, the group has now extended its trusted legacy into modern construction through CUPT Towers, bringing the same commitment, reliability, and quality into the world of spacious living with good interiors.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <Award className="w-8 h-8 text-red-600 mb-2" />
                  <h4 className="text-2xl font-bold text-gray-900">25+</h4>
                  <p className="text-sm text-gray-700">Years of Trust</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <Building className="w-8 h-8 text-red-600 mb-2" />
                  <h4 className="text-2xl font-bold text-gray-900">100%</h4>
                  <p className="text-sm text-gray-700">Quality Assured</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <Shield className="w-8 h-8 text-red-600 mb-2" />
                  <h4 className="text-2xl font-bold text-gray-900">Govt.</h4>
                  <p className="text-sm text-gray-700">Recognized</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <Users className="w-8 h-8 text-red-600 mb-2" />
                  <h4 className="text-2xl font-bold text-gray-900">5+</h4>
                  <p className="text-sm text-gray-700">Districts Served</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "Our commitment to excellence in service drives us to create living spaces that reflect the same standards of quality and trust."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Why Choose CUPT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">50+ Years Legacy</h4>
              <p className="text-gray-600">
                More than five decades of proven excellence in transport and service industry
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Quality Commitment</h4>
              <p className="text-gray-600">
                Every project reflects our dedication to excellence and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Government Recognised</h4>
              <p className="text-gray-600">
                Officially recognised and trusted by government departments across multiple districts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
