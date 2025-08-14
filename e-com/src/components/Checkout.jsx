import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { productId } = useParams();
  const { cartItems } = useCart();

  const product =
    productId !== "multiple"
      ? products.find((p) => String(p.id) === String(productId))
      : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Your order has been placed ✅ Thank you!
      </h1>

      {productId === "multiple" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow text-center">
              <img
                src={item.image || item.images?.[0] || "/placeholder.svg"}
                alt={item.name}
                className="w-40 h-40 object-cover mx-auto mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-blue-600 font-medium">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
          ))}
        </div>
      ) : product ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <img
            src={product.image || product.images?.[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-56 h-56 object-cover mx-auto rounded-lg shadow-md"
          />
          <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
          <p className="text-blue-600 font-semibold mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Category: {product.category}
          </p>
        </div>
      ) : (
        <p className="text-red-500">❌ Product not found.</p>
      )}

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Checkout;
