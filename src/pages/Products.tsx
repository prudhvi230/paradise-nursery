
import { useState } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(plants.map(plant => plant.category)))];
  
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Plant Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium houseplants, 
            perfect for every space and skill level.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'border-green-300 text-green-700 hover:bg-green-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No plants found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
