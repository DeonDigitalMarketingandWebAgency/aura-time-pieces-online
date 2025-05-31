
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import { motion } from 'framer-motion';

const collectionInfo = {
  premier: {
    title: "Premier Collection",
    description: "Our Premier collection represents the pinnacle of luxury and sophistication, designed for those who appreciate timeless elegance.",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1200&auto=format&fit=crop",
  },
  sportz: {
    title: "Sportz Collection",
    description: "The Sportz collection combines durability with precision, perfect for the active lifestyle without compromising on style.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop",
  },
  classic: {
    title: "Classic Collection",
    description: "Timeless designs that never go out of style. Our Classic collection features elegant timepieces with refined aesthetics.",
    image: "https://images.unsplash.com/photo-1548171915-152645368a1a?q=80&w=1200&auto=format&fit=crop",
  },
  'limited-edition': {
    title: "Limited Edition Collection",
    description: "Exclusive timepieces crafted in limited quantities, featuring unique designs and premium materials for the discerning collector.",
    image: "https://images.unsplash.com/photo-1612097454157-1645efa58add?q=80&w=1200&auto=format&fit=crop",
  },
};

const CollectionPage = () => {
  const { collection } = useParams<{ collection: string }>();
  const collectionKey = collection as keyof typeof collectionInfo;
  
  // Handle invalid collection
  if (!collectionInfo[collectionKey]) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container py-16 flex-grow">
          <h1 className="text-3xl font-serif">Collection Not Found</h1>
          <p className="mt-4">The requested collection does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  const info = collectionInfo[collectionKey];
  const collectionProducts = products.filter(product => 
    collection === 'limited-edition' 
      ? product.isLimitedEdition 
      : product.collection === collection
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src={info.image}
            alt={info.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container relative z-10 h-full flex flex-col justify-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {info.title}
          </motion.h1>
          <motion.div 
            className="w-24 h-px bg-aura-gold my-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {info.description}
          </motion.p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Explore {info.title}</h2>
          <div className="gold-divider"></div>
          
          {collectionProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {collectionProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No products available in this collection yet.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-aura-navy flex items-center justify-center mx-auto mb-4 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Precision Timekeeping</h3>
              <p className="text-gray-600">Crafted with meticulous attention to accuracy and reliability.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-aura-navy flex items-center justify-center mx-auto mb-4 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Handcrafted by master watchmakers with decades of experience.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-aura-navy flex items-center justify-center mx-auto mb-4 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Premium Materials</h3>
              <p className="text-gray-600">Only the finest materials are selected for our timepieces.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CollectionPage;
