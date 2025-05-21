
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-aura-navy">AURA</span>
          <span className="text-aura-gold ml-1 text-sm font-light">WATCHES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/products" className="nav-link font-medium">All Products</Link>
          <Link to="/collections/premier" className="nav-link font-medium">Premier</Link>
          <Link to="/collections/sportz" className="nav-link font-medium">Sportz</Link>
          <Link to="/collections/classic" className="nav-link font-medium">Classic</Link>
          <Link to="/collections/limited-edition" className="nav-link font-medium">Limited Edition</Link>
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
        <nav className="container flex flex-col py-4 space-y-3">
          <Link to="/products" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>All Products</Link>
          <Link to="/collections/premier" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Premier</Link>
          <Link to="/collections/sportz" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Sportz</Link>
          <Link to="/collections/classic" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Classic</Link>
          <Link to="/collections/limited-edition" className="nav-link font-medium" onClick={() => setIsMenuOpen(false)}>Limited Edition</Link>
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
