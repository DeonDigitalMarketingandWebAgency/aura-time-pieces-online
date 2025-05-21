
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Technology = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-aura-navy text-white">
        <div className="container">
          <h1 className="text-4xl font-serif text-center">Our Technology</h1>
          <div className="gold-divider"></div>
          <p className="text-center max-w-2xl mx-auto">
            Discover the precision engineering and innovation behind every Aura timepiece.
          </p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">The Art of Precision</h2>
            <p className="text-gray-700 mb-8">
              At Aura, we combine traditional Swiss watchmaking expertise with cutting-edge technology to create timepieces of exceptional quality and precision. Our master craftspeople work diligently to ensure every watch that bears the Aura name meets our exacting standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Movement Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Movement Technologies</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            The heart of every Aura watch is its movement - the mechanical engine that powers its timekeeping function.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1457545255860-f9dc39a3d903?q=80&w=1000&auto=format&fit=crop" 
                  alt="Automatic movement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-3">Automatic Movements</h3>
                <p className="text-gray-700 mb-4">
                  Our self-winding mechanical movements harness energy from the natural motion of your wrist, eliminating the need for a battery. Each movement features precision-engineered components working in perfect harmony.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Self-winding mechanism</li>
                  <li>28,800 vibrations per hour</li>
                  <li>38-72 hour power reserve</li>
                  <li>Decorated with Geneva stripes and perlage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622168775741-9d1be8e25c41?q=80&w=1000&auto=format&fit=crop" 
                  alt="Quartz movement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-3">Precision Quartz</h3>
                <p className="text-gray-700 mb-4">
                  Our high-frequency quartz movements deliver exceptional accuracy and reliability. Each quartz crystal is carefully selected and calibrated to ensure precise timekeeping under all conditions.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Accuracy to +/- 10 seconds per month</li>
                  <li>Temperature-compensated circuits</li>
                  <li>5-year battery life</li>
                  <li>Low energy consumption</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Chronograph movement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-3">Chronograph Calibers</h3>
                <p className="text-gray-700 mb-4">
                  Our chronograph movements combine stopwatch functionality with traditional timekeeping. Each component is meticulously engineered for smooth operation and long-term reliability.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Column wheel or cam-actuated mechanisms</li>
                  <li>1/4 or 1/8 second precision</li>
                  <li>Flyback capability on select models</li>
                  <li>Integrated chronograph design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Advanced Materials</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We select only the finest materials for our timepieces, ensuring durability, comfort, and beauty.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-aura-navy rounded-full flex-shrink-0">
                <span className="text-white text-2xl">01</span>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Sapphire Crystal</h3>
                <p className="text-gray-700">
                  Our watches feature scratch-resistant sapphire crystal with anti-reflective coating. Second only to diamond in hardness, sapphire crystal provides unparalleled clarity and protection for your watch dial.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-aura-navy rounded-full flex-shrink-0">
                <span className="text-white text-2xl">02</span>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">316L Stainless Steel</h3>
                <p className="text-gray-700">
                  Our cases are crafted from surgical-grade 316L stainless steel, known for its exceptional corrosion resistance, hypoallergenic properties, and ability to take a high polish finish.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-aura-navy rounded-full flex-shrink-0">
                <span className="text-white text-2xl">03</span>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Titanium Alloys</h3>
                <p className="text-gray-700">
                  Our sport models utilize grade 5 titanium, offering exceptional strength-to-weight ratio, corrosion resistance, and comfort. It's 45% lighter than steel while being significantly stronger.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-aura-navy rounded-full flex-shrink-0">
                <span className="text-white text-2xl">04</span>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Premium Leather</h3>
                <p className="text-gray-700">
                  Our leather straps are made from carefully selected hides, vegetable-tanned and hand-finished. Each strap is designed to develop a beautiful patina over time while maintaining its structural integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Water Resistance */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-2">Water Resistance Technology</h2>
              <div className="w-24 h-px bg-aura-gold mb-6"></div>
              <p className="text-gray-700 mb-6">
                Our watches feature sophisticated sealing systems to protect against water ingress. Multiple gaskets, screw-down crowns, and pressure-tested cases ensure reliable performance in aquatic environments.
              </p>
              
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Rating</th>
                    <th className="text-left py-2">Water Resistance</th>
                    <th className="text-left py-2">Suitable For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">30m / 3 ATM</td>
                    <td className="py-2">Splash resistant</td>
                    <td className="py-2">Everyday use</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">100m / 10 ATM</td>
                    <td className="py-2">Water resistant</td>
                    <td className="py-2">Swimming, snorkeling</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">200m / 20 ATM</td>
                    <td className="py-2">High water resistance</td>
                    <td className="py-2">Scuba diving</td>
                  </tr>
                  <tr>
                    <td className="py-2">300m+ / 30+ ATM</td>
                    <td className="py-2">Professional grade</td>
                    <td className="py-2">Deep-sea diving</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1550425494-8bfeb6624c6f?q=80&w=1000&auto=format&fit=crop" 
                alt="Water resistant watch" 
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-aura-navy text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif mb-4">Experience Aura Technology</h2>
            <p className="mb-8">
              Visit one of our boutiques to see the craftsmanship of our watches in person or download our technical brochures to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-aura-gold hover:bg-opacity-90 border-none text-white">
                <a href="/downloads/technical-brochure.pdf" download>Download Brochure</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-aura-navy">
                <a href="#store-locator">Find a Store</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Technology;
