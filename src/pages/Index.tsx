
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import products from '@/data/products';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock } from 'lucide-react';

const Index = () => {
  // Get featured products - bestsellers first, then one from each collection
  const bestsellers = products.filter(product => product.isBestseller);
  const newArrivals = products.filter(product => product.isNew);
  
  const featuredProducts = [
    ...bestsellers,
    ...products.filter(p => !bestsellers.some(b => b.id === p.id)).reduce((acc, product) => {
      if (!acc.some(p => p.collection === product.collection)) {
        acc.push(product);
      }
      return acc;
    }, [] as typeof products)
  ].slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury watch" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Time Elevated to Art
            </motion.h1>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Precision engineering meets timeless design in every Aura timepiece.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white px-8 py-6 text-base">
                <Link to="/products">Explore Collections</Link>
              </Button>
              <Button asChild variant="outline" 
                className="border-white text-black hover:bg-aura-gold hover:text-white px-8 py-6 text-base flex items-center gap-2 relative overflow-hidden group"
              >
                <Link to="/store-locator">
                  <span className="absolute inset-0 w-0 bg-aura-gold group-hover:w-full transition-all duration-300 ease-out z-0"></span>
                  <MapPin className="relative z-10" size={20} />
                  <span className="relative z-10">Find a Store Near You</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Collections Quick Access */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/collections/premier" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg hover:bg-gray-50 h-full flex flex-col items-center justify-center">
                <h3 className="font-serif text-xl mb-2">Premier</h3>
                <p className="text-sm text-gray-600 mb-3">Elegance & Sophistication</p>
                <ArrowRight className="text-aura-gold transition-transform duration-200 group-hover:translate-x-1" size={20} />
              </div>
            </Link>
            <Link to="/collections/sportz" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg hover:bg-gray-50 h-full flex flex-col items-center justify-center">
                <h3 className="font-serif text-xl mb-2">Sportz</h3>
                <p className="text-sm text-gray-600 mb-3">Durability & Performance</p>
                <ArrowRight className="text-aura-gold transition-transform duration-200 group-hover:translate-x-1" size={20} />
              </div>
            </Link>
            <Link to="/collections/classic" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg hover:bg-gray-50 h-full flex flex-col items-center justify-center">
                <h3 className="font-serif text-xl mb-2">Classic</h3>
                <p className="text-sm text-gray-600 mb-3">Timeless & Refined</p>
                <ArrowRight className="text-aura-gold transition-transform duration-200 group-hover:translate-x-1" size={20} />
              </div>
            </Link>
            <Link to="/collections/limited-edition" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg hover:bg-gray-50 h-full flex flex-col items-center justify-center">
                <h3 className="font-serif text-xl mb-2">Limited Edition</h3>
                <p className="text-sm text-gray-600 mb-3">Exclusive & Unique</p>
                <ArrowRight className="text-aura-gold transition-transform duration-200 group-hover:translate-x-1" size={20} />
              </div>
            </Link>
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
                    <Link to="/collections/premier">View Collection</Link>
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
                    <Link to="/collections/sportz">View Collection</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1548171915-152645368a1a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Classic Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-navy to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">Classic Collection</h3>
                  <p className="mb-4">Timeless designs that endure</p>
                  <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white">
                    <Link to="/collections/classic">View Collection</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1623998022290-a74f8cc36491?q=80&w=1000&auto=format&fit=crop" 
                  alt="Limited Edition Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-navy to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">Limited Edition</h3>
                  <p className="mb-4">Exclusive timepieces for collectors</p>
                  <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white">
                    <Link to="/collections/limited-edition">View Collection</Link>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 h-full">
                  <Link to={`/products/${product.collection}/${product.id}`}>
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.isNew && (
                        <div className="absolute top-2 right-2 bg-aura-gold text-white text-xs px-2 py-1 rounded">NEW</div>
                      )}
                      {product.isBestseller && (
                        <div className="absolute top-2 left-2 bg-aura-navy text-white text-xs px-2 py-1 rounded">BESTSELLER</div>
                      )}
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
              </motion.div>
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
      
      {/* Store Locator Highlight */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1595422656745-039f1574ea4b?q=80&w=1000&auto=format&fit=crop" 
                alt="Aura Watches Boutique" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aura-navy to-transparent opacity-50"></div>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-4">Visit Our Boutiques</h2>
              <div className="w-24 h-px bg-aura-gold mb-6"></div>
              <p className="mb-6">
                Experience the world of Aura in person at one of our exclusive boutiques. Our knowledgeable staff will guide you through our collections and help you find the perfect timepiece.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <MapPin className="text-aura-gold mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Discover our global network of boutiques and authorized retailers</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-aura-gold mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Book a private consultation with our watch specialists</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-aura-gold hover:bg-opacity-90 text-white flex items-center gap-2 group">
                <Link to="/store-locator">
                  <MapPin size={18} />
                  <span>Find a Store Near You</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
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
