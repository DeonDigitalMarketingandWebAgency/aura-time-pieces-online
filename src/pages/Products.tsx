
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Products = () => {
  const { collection } = useParams();
  const navigate = useNavigate();
  const [activeCollection, setActiveCollection] = useState(collection || 'all');
  
  // Get unique collections
  const collections = ['all', ...new Set(products.map(product => product.collection))];
  
  // Filter products by collection
  const filteredProducts = activeCollection === 'all' 
    ? products 
    : products.filter(product => product.collection === activeCollection);
    
  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveCollection(value);
    navigate(value === 'all' ? '/products' : `/products/${value}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-aura-navy text-white">
        <div className="container">
          <h1 className="text-4xl font-serif text-center">Our Collections</h1>
          <div className="gold-divider"></div>
          <p className="text-center max-w-2xl mx-auto">
            Discover the perfect timepiece to complement your style and meet your needs.
          </p>
        </div>
      </section>
      
      {/* Collections Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <Tabs value={activeCollection} onValueChange={handleTabChange}>
            <TabsList className="mx-auto">
              {collections.map((col) => (
                <TabsTrigger 
                  key={col} 
                  value={col}
                  className="capitalize"
                >
                  {col}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 flex-grow">
        <div className="container">
          {activeCollection !== 'all' && (
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-serif capitalize mb-4">{activeCollection} Collection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {activeCollection === 'premier' 
                  ? 'Our Premier collection represents the pinnacle of luxury and sophistication, designed for those who appreciate timeless elegance.'
                  : 'The Sportz collection combines durability with precision, perfect for the active lifestyle without compromising on style.'}
              </p>
            </div>
          )}
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif mb-4">No watches found</h3>
              <p className="text-gray-600 mb-8">We couldn't find any watches in this collection.</p>
              <Button onClick={() => handleTabChange('all')}>View All Collections</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Price List Download */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">Download Our Price List</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Get complete pricing information for our entire collection of luxury timepieces.
            </p>
            <Button asChild className="bg-aura-navy text-white">
              <a href="/downloads/price-list.pdf" download>Download Price List</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
