import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner - 3 BHK',
      rating: 5,
      text: 'Exceptional quality and attention to detail. CUPT Towers exceeded our expectations in every way. The entire process was smooth and transparent.'
    },
    {
      name: 'Priya Shankar',
      role: 'Homeowner - 2 BHK',
      rating: 5,
      text: 'Great location, premium amenities, and excellent construction quality. Moving here was the best decision for our family. Highly recommended!'
    },
    {
      name: 'Arun Venkatesh',
      role: 'Homeowner - 1 BHK',
      rating: 5,
      text: 'The team at CUPT is professional and reliable. They delivered on time and maintained the promised quality. Very satisfied with our new home.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Our Residents Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from happy homeowners who made CUPT Towers their home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-red-600 opacity-20 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">Join our community of satisfied homeowners</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            Book Your Home Today
          </button>
        </div>
      </div>
    </section>
  );
}
