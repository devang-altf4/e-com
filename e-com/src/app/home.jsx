import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Cart from "../components/cart";
import CategoryFilter from "../components/CatergoryFilter";
import { useProducts } from "../Hooks/useProducts";
import DarkVeil from "../components/DarkVeil";
import { useCart } from "../context/CartContext"; // <-- use context

function Home() {
  const { products, loading, error } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Pull cart data and actions from context
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 w-full h-full">
        <DarkVeil
          hueShift={30}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={3.0}
          warpAmount={0.2}
        />
      </div>

      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="container mx-auto px-4 py-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductList
          products={products}
          loading={loading}
          error={error}
          onAddToCart={addToCart} // use context
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        // If your Cart consumes context internally, you can remove the three props below.
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default Home;
