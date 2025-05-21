
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import products from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container py-20 flex-grow">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
            <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/products">Return to Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-aura-gold">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-aura-gold">Collections</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/products/${product.collection}`} className="text-gray-500 hover:text-aura-gold capitalize">{product.collection}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <section className="py-12 flex-grow">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <Card className="overflow-hidden border-none shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600 capitalize mb-4">{product.collection} Collection</p>
                <div className="w-16 h-px bg-aura-gold mb-6"></div>
                <p className="text-2xl font-medium">${product.price.toLocaleString()}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-serif mb-4">Description</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-serif mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <Button asChild className="bg-aura-navy text-white w-full md:w-auto mb-4 md:mr-4">
                  <a href="#store-locator">Find in Store</a>
                </Button>
                <Button asChild variant="outline" className="border-aura-navy text-aura-navy hover:bg-aura-navy hover:text-white w-full md:w-auto">
                  <a href={product.documentUrl} download>Download Specification</a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Technical Details */}
          <div className="mt-16">
            <Tabs defaultValue="specifications">
              <TabsList className="mb-8 mx-auto">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="care">Care Guide</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications">
                <Card className="p-6">
                  <h3 className="text-xl font-serif mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex border-b pb-2">
                        <span className="font-medium w-1/3">{key}</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="technology">
                <Card className="p-6">
                  <h3 className="text-xl font-serif mb-6">Watch Technology</h3>
                  <p className="mb-4">
                    Aura watches incorporate advanced horological technology to ensure precision and reliability. Our movements are crafted with the highest standards of Swiss watchmaking tradition, combined with modern innovations.
                  </p>
                  <p>
                    For more detailed information about the specific technology used in this timepiece, please download the technical specification document or visit our Technology page.
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="care">
                <Card className="p-6">
                  <h3 className="text-xl font-serif mb-6">Care Instructions</h3>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Clean your watch regularly with a soft cloth to remove dust and dirt</li>
                    <li>Avoid exposing your watch to extreme temperatures or magnetic fields</li>
                    <li>If your watch is water-resistant, rinse it with fresh water after exposure to salt water</li>
                    <li>Have your watch serviced by an authorized Aura service center every 3-5 years</li>
                    <li>Store your watch in a dry place when not in use</li>
                    <li>Avoid exposing your watch to chemicals, solvents, or harsh cleaners</li>
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
