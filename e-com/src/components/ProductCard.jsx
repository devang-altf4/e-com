import { Link } from "react-router-dom";
import TiltedCard from "../components/TiltedCrd";

const ProductCard = ({ product, onAddToCart }) => {
  const overlayContent = (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm mb-3">{product.description}</p>
      <div className="flex items-center justify-center space-x-2">
        <span className="text-xl font-bold">${product.price}</span>
        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{product.category}</span>
      </div>
    </div>
  );

  // All clickable content (except the button) goes inside the Link
  const cardContent = (
    <div className="card-container flex flex-col">
      <Link to={`/product/${product.id}`} className="block group">
        <div className="p-4 ">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
          </div>
        </div>
      </Link>
      {/* The button stays visually inside the card but outside the Link */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
        disabled={!product.inStock}
        className={`
          w-full max-w-[192px]
          py-3 sm:py-4 md:py-3 lg:py-4
          px-4 sm:px-6
          rounded-lg
          text-sm sm:text-base
          font-medium
          mb-4
          mx-auto
          transition-colors
          ${product.inStock ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}
        `}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <TiltedCard
        imageSrc={product.image || "/placeholder.svg"}
        altText={product.name}
        captionText=""
        containerHeight="auto"
        containerWidth="98%"
        imageHeight="250px"
        imageWidth="100%"
        rotateAmplitude={8}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={overlayContent}
        cardContent={cardContent}
      />
    </div>
  );
};

export default ProductCard;
