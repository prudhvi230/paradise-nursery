
import { ShoppingCart, Home, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header = () => {
  const location = useLocation();
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  
  return (
    <header className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">Paradise Nursery</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {location.pathname !== '/' && (
              <Link 
                to="/" 
                className="flex items-center space-x-1 text-green-700 hover:text-green-900 transition-colors"
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </Link>
            )}
            
            {location.pathname !== '/products' && (
              <Link 
                to="/products" 
                className="text-green-700 hover:text-green-900 transition-colors font-medium"
              >
                Shop Plants
              </Link>
            )}
            
            {location.pathname !== '/cart' && (
              <Link 
                to="/cart" 
                className="relative flex items-center space-x-1 text-green-700 hover:text-green-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalQuantity}
                  </span>
                )}
                <span className="font-medium">Cart</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
