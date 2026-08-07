import { Award, Shield, ThumbsUp, Clock, Home, Users } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Excellence',
      description: 'Decades of experience and a legacy of trust in Coimbatore'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Premium materials and superior construction standards'
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: 'Government Recognized',
      description: 'Trusted partner of government departments and agencies'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timely Delivery',
      description: 'Committed to delivering projects on schedule'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Prime Location',
      description: 'Strategic location with excellent connectivity and amenities'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Dedicated support and transparent communication throughout'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose CUPT Towers?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for homebuyers in Coimbatore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-red-50 transition-all duration-300 group border-2 border-transparent hover:border-red-600"
            >
              <div className="bg-red-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make CUPT Towers Your Home?</h3>
          <p className="text-xl mb-8 text-red-100">
            Join hundreds of satisfied homeowners who chose excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Site Visit
            </button>
            <button
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
