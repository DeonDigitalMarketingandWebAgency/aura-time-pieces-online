
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-aura-navy">AURA</span>
          <span className="text-aura-gold ml-1 text-sm font-light">WATCHES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <div className="relative group">
            <button 
              className="nav-link font-medium flex items-center"
              onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
            >
              Collections <ChevronDown size={16} className="ml-1" />
            </button>
            <div className={cn(
              "absolute left-0 top-full bg-white shadow-lg rounded-md py-2 w-48 transition-all duration-200 transform origin-top",
              isCollectionsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            )}>
              <Link to="/collections/premier" className="block px-4 py-2 hover:bg-gray-50">Premier</Link>
              <Link to="/collections/sportz" className="block px-4 py-2 hover:bg-gray-50">Sportz</Link>
              <Link to="/collections/classic" className="block px-4 py-2 hover:bg-gray-50">Classic</Link>
              <Link to="/collections/limited-edition" className="block px-4 py-2 hover:bg-gray-50">Limited Edition</Link>
            </div>
          </div>
          <Link to="/technology" className="nav-link font-medium">Technology</Link>
          <Link to="/store-locator" className="nav-link font-medium">Store Locator</Link>
          <Link to="/support" className="nav-link font-medium">Support</Link>
          <Link to="/contact" className="nav-link font-medium">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-[500px]" : "max-h-0"
      )}>
        <nav className="container flex flex-col py-4 space-y-4">
          <div>
            <button 
              className="nav-link font-medium flex items-center justify-between w-full"
              onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
            >
              Collections <ChevronDown size={16} className={cn("transition-transform", isCollectionsOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn(
              "pl-4 border-l-2 border-gray-100 ml-2 mt-2 space-y-2 transition-all",
              isCollectionsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 hidden"
            )}>
              <Link to="/collections/premier" className="block py-1" onClick={() => setIsMenuOpen(false)}>Premier</Link>
              <Link to="/collections/sportz" className="block py-1" onClick={() => setIsMenuOpen(false)}>Sportz</Link>
              <Link to="/collections/classic" className="block py-1" onClick={() => setIsMenuOpen(false)}>Classic</Link>
              <Link to="/collections/limited-edition" className="block py-1" onClick={() => setIsMenuOpen(false)}>Limited Edition</Link>
            </div>
          </div>
          <Link to="/technology" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Technology</Link>
          <Link to="/store-locator" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Store Locator</Link>
          <Link to="/support" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Support</Link>
          <Link to="/contact" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
