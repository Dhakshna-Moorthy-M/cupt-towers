import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/cupt_logo.png" alt="CUPT Towers" className="h-14 w-auto object-contain" />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('highlights')} className="text-gray-700 hover:text-red-600 transition-colors">Highlights</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-red-600 transition-colors">Location</button>
            <button onClick={() => scrollToSection('floor-plans')} className="text-gray-700 hover:text-red-600 transition-colors">Floor Plans</button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-red-600 transition-colors">Amenities</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-red-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </button>
          </nav>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('highlights')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Highlights</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Location</button>
              <button onClick={() => scrollToSection('floor-plans')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Floor Plans</button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Amenities</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 w-full justify-center">
                <Phone className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
