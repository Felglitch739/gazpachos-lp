import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-white tracking-wider">
              GAZPACHO'S
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#menu" className="text-gray-300 hover:text-brand-amber transition-colors text-sm uppercase tracking-widest">Menu</a>
            <a href="#about" className="text-gray-300 hover:text-brand-amber transition-colors text-sm uppercase tracking-widest">About</a>
            <a href="#location" className="text-gray-300 hover:text-brand-amber transition-colors text-sm uppercase tracking-widest">Location</a>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href="https://fromtherestaurant.com/gazpachos/locations/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-amber hover:bg-brand-rusty text-white px-6 py-2 rounded-sm transition-colors uppercase text-sm font-medium tracking-wide"
            >
              Order Online
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-amber transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-brand-glass-border">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <a href="#menu" className="text-gray-200 hover:text-brand-amber block py-2 text-lg uppercase tracking-widest">Menu</a>
            <a href="#about" className="text-gray-200 hover:text-brand-amber block py-2 text-lg uppercase tracking-widest">About</a>
            <a href="#location" className="text-gray-200 hover:text-brand-amber block py-2 text-lg uppercase tracking-widest">Location</a>
            <a 
              href="https://fromtherestaurant.com/gazpachos/locations/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-amber hover:bg-brand-rusty text-white px-8 py-3 rounded-sm transition-colors uppercase text-sm font-medium tracking-wide mt-4 inline-block"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
