
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-green-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some beautiful plants to get started!</p>
            <Link to="/products">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 mb-8">Shopping Cart</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg">Total Items: <span className="font-bold">{totalQuantity}</span></p>
              <Button 
                onClick={handleClearCart}
                variant="outline" 
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
            
            <div className="space-y-4">
              {items.map(item => (
                <Card key={item.id} className="border-green-100">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="font-medium px-3">{item.quantity}</span>
                        
                        <Button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          onClick={() => handleRemoveItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total: ${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Link to="/products" className="flex-1">
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Continue Shopping
                </Button>
              </Link>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
