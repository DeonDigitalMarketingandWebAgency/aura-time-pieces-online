
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import products from '@/data/products';

const Index = () => {
  // Get featured products (one from each collection)
  const featuredProducts = products.reduce((acc, product) => {
    if (!acc.some(p => p.collection === product.collection)) {
      acc.push(product);
    }
    return acc;
  }, [] as typeof products).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury watch" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Time Elevated to Art</h1>
            <p className="text-lg mb-8">Precision engineering meets timeless design in every Aura timepiece.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white px-8 py-6">
                <Link to="/products">Explore Collections</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-aura-navy px-8 py-6">
                <Link to="/store-locator">Find a Store</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collections Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Our Collections</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our exceptional lineup of precision timepieces, each crafted with mastery and designed for distinction.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1626357437191-4c56e8e9a6d4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Premier Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-navy to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">Premier Collection</h3>
                  <p className="mb-4">Elegance redefined for the connoisseur</p>
                  <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white">
                    <Link to="/products/premier">View Collection</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1629205926847-35d4630fc000?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sportz Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-navy to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">Sportz Collection</h3>
                  <p className="mb-4">Performance and style for the active life</p>
                  <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white">
                    <Link to="/products/sportz">View Collection</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Featured Timepieces</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our most coveted designs, each representing the pinnacle of watchmaking excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <Link to={`/products/${product.collection}/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-serif font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection
                    </p>
                    <p className="font-medium text-aura-navy">${product.price.toLocaleString()}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-aura-navy hover:bg-opacity-90 text-white px-8">
              <Link to="/products">View All Watches</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-2">Uncompromising Craftsmanship</h2>
              <div className="w-24 h-px bg-aura-gold mb-6"></div>
              <p className="text-gray-700 mb-6">
                Every Aura timepiece is the result of meticulous attention to detail and decades of horological expertise. Our master watchmakers combine traditional techniques with cutting-edge technology to create watches of exceptional quality and precision.
              </p>
              <p className="text-gray-700 mb-6">
                From the selection of the finest materials to the final assembly and rigorous testing, no detail is overlooked in our pursuit of perfection.
              </p>
              <Button asChild className="bg-aura-navy hover:bg-opacity-90 text-white">
                <Link to="/technology">Discover Our Technology</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1612117189122-6b065b74f4bd?q=80&w=1000&auto=format&fit=crop" 
                alt="Watch craftsmanship" 
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-aura-navy text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-4">Experience Aura Excellence</h2>
            <p className="mb-8">
              Visit one of our boutiques for a personalized consultation with our watch specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white px-8">
                <Link to="/store-locator">Find a Store</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-aura-navy px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
