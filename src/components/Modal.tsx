"use client";
import { Product } from "@/types/Product";

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

const Modal = ({ product, onClose }: ModalProps) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center hover:text-gray-700">
      <div className="bg-white p-4 rounded shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2  ">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />
        <div className="flex items-center mb-4">
          <p className="text-yellow-500 font-bold">{product.rating.rate} / 5</p>
          <p className="text-gray-700 ml-2">({product.rating.count} reviews)</p>
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 font-bold mb-4">${product.price}</p>
      </div>
    </div>
  );
};

export default Modal;
