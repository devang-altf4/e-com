import { ShoppingCart } from "lucide-react";
import ShinyText from "./ShinyText";
import SearchBar from '../components/SearchBar';

const Header = ({ cartItems, onCartClick, searchTerm, onSearchChange }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Logo Bar - NOT sticky, scrolls away */}
      <div className="w-full bg-transparent py-3 px-4 border-b border-white/20">
        <div className="container mx-auto text-center">
          <ShinyText
            text="CheapaShop"
            speed={5}
            className="custom-class sm:font-extrabold font-black text-3xl font-poppins"
          />
        </div>
      </div>

      {/* Search Bar - STICKY, always visible with transparent background */}
      <div className="sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center">
            {/* Animated Search Bar - Flexible width */}
            <div className="flex-grow mr-1">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
              />
            </div>
            
            {/* Cart Button - Right next to search bar */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              <ShoppingCart className="w-7 h-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
