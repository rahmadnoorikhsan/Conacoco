'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      variants={cardVariants}
    >
      {/* Bagian Gambar */}
      <div className="relative w-full aspect-video">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Bagian Konten Teks */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
        
        {/* Garis Pemisah */}
        <hr className="my-4" />

        {/* Bagian Spesifikasi */}
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Specifications:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span className="font-semibold">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;