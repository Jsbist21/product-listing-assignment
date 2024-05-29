"use client";
import { Product } from "@/types/Product";

interface CardProps {
  product: Product;
  onClick: () => void;
}

const Card = ({ product, onClick }: CardProps) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-xl transition-shadow duration-200 ">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-contain mb-4"
        style={{ maxHeight: "200px" }}
      />
      <h2 className="text-xl font-semibold truncate">{product.title}</h2>
      <div className="flex items-center mb-4">
        <p className="text-yellow-500 font-bold">{product.rating.rate} / 5</p>
        <p className="text-gray-700 ml-2">({product.rating.count} reviews)</p>
      </div>
      <p className="text-gray-700">${product.price}</p>
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={onClick}
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
