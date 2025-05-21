
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { StoreLocation } from '@/data/stores';
import stores from '@/data/stores';

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<StoreLocation | null>(null);
  
  // Filter stores based on search
  const filteredStores = searchTerm 
    ? stores.filter(store => 
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.state.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : stores;
    
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-aura-navy text-white">
        <div className="container">
          <h1 className="text-4xl font-serif text-center">Store Locator</h1>
          <div className="gold-divider"></div>
          <p className="text-center max-w-2xl mx-auto">
            Visit an Aura boutique to experience our timepieces in person and receive expert guidance from our watch specialists.
          </p>
        </div>
      </section>
      
      {/* Store Finder */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-xl mx-auto mb-12">
            <h2 className="text-2xl font-serif text-center mb-6">Find Your Nearest Boutique</h2>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search by city or state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Button 
                onClick={() => setSearchTerm('')}
                variant="outline"
                className="border-aura-navy text-aura-navy"
              >
                Clear
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Store List */}
            <div className="lg:col-span-1 space-y-6 h-[600px] overflow-y-auto pr-2">
              {filteredStores.length === 0 ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-serif mb-2">No stores found</h3>
                  <p className="text-gray-600">Please try a different search term.</p>
                </div>
              ) : (
                filteredStores.map(store => (
                  <Card 
                    key={store.id} 
                    className={`cursor-pointer transition-all ${selectedStore?.id === store.id ? 'border-aura-gold shadow-md' : 'hover:shadow-md'}`}
                    onClick={() => setSelectedStore(store)}
                  >
                    <CardContent className="p-4">
                      <h3 className="text-lg font-serif mb-1">{store.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{store.city}, {store.state}</p>
                      <p className="text-sm text-gray-600">{store.address}</p>
                      <p className="text-sm text-gray-600">{store.city}, {store.state} {store.zip}</p>
                      <p className="text-sm text-gray-600 mt-2">{store.phone}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
            
            {/* Store Details */}
            <div className="lg:col-span-2">
              {selectedStore ? (
                <div>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-serif mb-1">{selectedStore.name}</h2>
                          <p className="text-gray-600">{selectedStore.city}, {selectedStore.state}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Button asChild className="mr-4 bg-aura-navy text-white">
                            <a href={`tel:${selectedStore.phone}`}>{selectedStore.phone}</a>
                          </Button>
                          <Button asChild variant="outline" className="border-aura-navy text-aura-navy">
                            <a href={`mailto:${selectedStore.email}`}>Email</a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-medium mb-3">Address</h3>
                          <p className="text-gray-700">{selectedStore.address}</p>
                          <p className="text-gray-700">{selectedStore.city}, {selectedStore.state} {selectedStore.zip}</p>
                          <p className="text-gray-700">{selectedStore.country}</p>
                          
                          <h3 className="font-medium mt-6 mb-3">Contact</h3>
                          <p className="text-gray-700">{selectedStore.phone}</p>
                          <p className="text-gray-700">{selectedStore.email}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-3">Hours of Operation</h3>
                          {Object.entries(selectedStore.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between py-1 border-b">
                              <span className="font-medium">{day}</span>
                              <span className="text-gray-700">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Placeholder for map - in a real application you would integrate a maps API here */}
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-600">Map View - In a real application, this would show a map with the store location.</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-50 rounded-md border border-gray-200">
                  <div className="text-center p-8">
                    <h3 className="text-xl font-serif mb-2">Select a Store</h3>
                    <p className="text-gray-600">Please select a store from the list to view its details.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;
