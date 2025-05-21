
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-aura-navy text-white">
        <div className="container">
          <h1 className="text-4xl font-serif text-center">Customer Support</h1>
          <div className="gold-divider"></div>
          <p className="text-center max-w-2xl mx-auto">
            We're here to help you with any questions about your Aura timepiece.
          </p>
        </div>
      </section>
      
      {/* Support Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-aura-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aura-gold">
                    <path d="M12 1v2M12 21v2M4 12H2M6.31 6.31 5 5M17.69 6.31 19 5M6.31 17.69 5 19M17.69 17.69 19 19M22 12h-2" />
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                </div>
                <h2 className="text-xl font-serif mb-4">Service & Repairs</h2>
                <p className="text-gray-600 mb-6">
                  Learn about our service centers, repair process, and maintenance recommendations.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <a href="#service">Service Information</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-aura-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aura-gold">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-serif mb-4">FAQs</h2>
                <p className="text-gray-600 mb-6">
                  Find answers to commonly asked questions about our products and services.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <a href="#faq">View FAQs</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-aura-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aura-gold">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-serif mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  Reach out to our customer service team with any questions or concerns.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Service & Repair Section */}
      <section id="service" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Service & Repairs</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our expert technicians ensure your timepiece maintains its precision and beauty for generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Authorized Service Centers</h3>
              <p className="text-gray-700 mb-4">
                All Aura watches should be serviced at authorized service centers to maintain warranty coverage and ensure genuine parts are used. Our certified watchmakers have been trained to handle our specific movements and techniques.
              </p>
              <p className="text-gray-700 mb-6">
                We recommend servicing your watch every 3-5 years, depending on the model and usage patterns. Regular maintenance ensures optimal performance and longevity.
              </p>
              <Button asChild className="mb-2 md:mb-0 md:mr-4 bg-aura-navy text-white">
                <Link to="/store-locator">Find Service Center</Link>
              </Button>
              <Button asChild variant="outline" className="border-aura-navy text-aura-navy">
                <a href="/downloads/service-guide.pdf" download>Download Service Guide</a>
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-6">Service Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-aura-navy text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <p>Bring or send your watch to an authorized Aura service center</p>
                  </li>
                  <li className="flex">
                    <span className="bg-aura-navy text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <p>Our technicians will examine your watch and provide a service quote</p>
                  </li>
                  <li className="flex">
                    <span className="bg-aura-navy text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <p>Upon approval, your watch will be serviced by our master watchmakers</p>
                  </li>
                  <li className="flex">
                    <span className="bg-aura-navy text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <p>Each watch undergoes rigorous testing to ensure optimal performance</p>
                  </li>
                  <li className="flex">
                    <span className="bg-aura-navy text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <p>You will be notified when your watch is ready for pickup or shipping</p>
                  </li>
                </ol>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-2">Service Warranty</h4>
                  <p className="text-gray-700">All service work is covered by a 24-month warranty.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Frequently Asked Questions</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Find answers to common questions about our watches, warranties, and services.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How often should I service my watch?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend servicing your mechanical watch every 3-5 years to ensure optimal performance and longevity. Quartz watches typically require battery replacement every 2-3 years, which is a good time for a general inspection as well.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What does the warranty cover?
                </AccordionTrigger>
                <AccordionContent>
                  Our international warranty covers manufacturing defects for a period of 5 years from the date of purchase. The warranty does not cover normal wear and tear, damage resulting from misuse, unauthorized repair attempts, or accidents.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is my watch water-resistant?
                </AccordionTrigger>
                <AccordionContent>
                  Most Aura watches have some degree of water resistance, but the specific rating varies by model. Water resistance ratings are clearly marked on the caseback or in the technical specifications. Remember that water resistance can diminish over time and should be tested during regular service.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How accurate is my mechanical watch?
                </AccordionTrigger>
                <AccordionContent>
                  Our premium mechanical watches are regulated to achieve an accuracy of +/-3 seconds per day, while standard mechanical movements typically achieve +/-10 seconds per day. Various factors such as position, temperature, and winding level can affect accuracy.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can I swim or shower with my watch?
                </AccordionTrigger>
                <AccordionContent>
                  This depends on the water resistance rating of your specific model. Watches rated at 30m are splash-resistant only. Models rated 100m or higher are generally suitable for swimming. For diving, we recommend models specifically designed for this purpose with a minimum 200m rating.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How do I wind my automatic watch?
                </AccordionTrigger>
                <AccordionContent>
                  If your automatic watch has stopped, you can give it an initial wind by turning the crown clockwise about 20-30 times. Once running, the watch will wind itself through your natural wrist movements. If you don't wear the watch regularly, consider a watch winder to keep it running.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Downloads Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif text-center mb-2">Helpful Resources</h2>
          <div className="gold-divider"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Download user manuals, care guides, and other helpful information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-serif mb-4">User Manuals</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Find detailed instructions for setting and using your specific watch model.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <a href="/downloads/user-manuals.pdf" download>Download Manuals</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-serif mb-4">Care Guides</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Learn how to properly care for your timepiece to maintain its beauty and function.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <a href="/downloads/care-guide.pdf" download>Download Guide</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-serif mb-4">Price List</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  View our complete price list for all current watch models and collections.
                </p>
                <Button asChild className="w-full bg-aura-navy text-white">
                  <a href="/downloads/price-list.pdf" download>Download Price List</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Support;
