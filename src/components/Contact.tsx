import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919342030433';
    const message = `Hi, I'm interested in CUPT Towers.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find your dream home? Reach out to us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+91 9342030433</p>
                  <p className="text-gray-300">+91 9342060433</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/919342030433" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    +91 9342030433
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:cupttowers@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    cupttowers@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">
                    TS No: 129, 130, 132<br />
                    Ragavendra Nagar<br />
                    (Opp) Hitec City<br />
                    Maheswari Nagar 4th Street<br />
                    Peelamedu - Post<br />
                    Coimbatore - 641001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3">RERA Number</h4>
              <p className="text-gray-300 font-medium">
                TN/11/Building/0200/2025
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Visit Our Site Office</h4>
              <p className="text-gray-300 mb-4">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: By Appointment
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none text-white placeholder-gray-400"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
