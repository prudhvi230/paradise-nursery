
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-16 w-16 text-green-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold">Paradise Nursery</h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your space into a green paradise with our carefully curated collection 
            of premium houseplants. From beginners to experts, we have the perfect plants 
            to bring life and beauty to your home.
          </p>
          
          <Link to="/products">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            Why Choose Paradise Nursery?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected plants from trusted growers, ensuring you receive only the healthiest specimens.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">Plant Guarantee</h3>
              <p className="text-gray-600">
                30-day guarantee on all plants. If your plant doesn't thrive, we'll make it right.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">Expert Care Tips</h3>
              <p className="text-gray-600">
                Detailed care instructions and ongoing support to help your plants flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-8">About Paradise Nursery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For over two decades, Paradise Nursery has been dedicated to bringing the beauty 
              and tranquility of nature into homes across the country. We believe that every 
              space deserves the life-giving presence of plants, and we're here to make that 
              vision a reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our passion for plants drives us to source only the finest specimens, provide 
              expert care advice, and ensure every customer finds their perfect green companion. 
              Whether you're just starting your plant journey or you're a seasoned enthusiast, 
              Paradise Nursery is your trusted partner in creating beautiful, healthy spaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
