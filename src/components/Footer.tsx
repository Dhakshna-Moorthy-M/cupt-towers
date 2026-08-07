import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Landmark } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/cupt_logo.png" alt="CUPT Towers" className="h-16 w-auto object-contain mb-4 bg-white rounded-lg p-1" />
            <p className="text-gray-400 mb-4">
              Building dreams, creating homes. CUPT Towers - Where quality meets trust.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('floor-plans')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Floor Plans
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+91 9342030433</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:cupttowers@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  cupttowers@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  CUPT Towers<br />
                  Coimbatore, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <div className="bg-white/10 p-4 rounded-lg mb-3">
              <p className="text-sm font-semibold mb-1">RERA Number</p>
              <p className="text-xs text-gray-300">TN/11/Building/0200/2025</p>
            </div>

            {/* Bank Partner */}
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Landmark className="w-4 h-4 text-red-400 flex-shrink-0" />
                <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Finance Partner</p>
              </div>
              <img src="/uco-bank1200-1745839590.jpg" alt="UCO Bank" className="h-7 w-auto object-contain rounded mb-2" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Home loans supported by UCO Bank
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} CUPT Towers. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Developed by CUPT Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
