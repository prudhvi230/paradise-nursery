
import { ShoppingCart, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, Plant } from '../store/cartSlice';
import { RootState } from '../store/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(plant));
      toast({
        title: "Added to cart!",
        description: `${plant.name} has been added to your cart.`,
      });
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-green-100">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">{plant.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{plant.description}</p>
          <p className="text-2xl font-bold text-green-600">${plant.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full transition-colors duration-200 flex items-center justify-center space-x-2 ${
            isInCart 
              ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="h-4 w-4" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
