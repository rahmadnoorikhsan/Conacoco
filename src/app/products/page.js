// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import HeroSection from '@/components/HeroSections';

// const productsData = [
    // {
    //   id: 1,
    //   image: 'https://conacoco.com/wp-content/uploads/2025/04/2-1.png',
    //   title: 'PILLOW CHARCOAL BBQ',
    //   description: 'High-Quality Pillow Charcoal is one of our best-selling products. When it comes to quality, it delivers outstanding performance with long-lasting heat, low ash, and clean burning. Trusted by BBQ lovers and professionals worldwide, pillow charcoal is made from pure coconut shell charcoal, processed hygienically and in an eco-friendly manner.',
    //   specifications: {
    //     "Raw Material": "Coconut shell charcoal",
    //     "Shape": "Pillow (cushion-shaped)",
    //     "Fixed Carbon": ">70%",
    //     "Ash Content": "<5%",
    //     "Moisture": "<8%",
    //     "Packing": "5 kg, 10 kg, 20 kg (customizable)"
    //   }
    // },
    // {
    //   id: 2,
    //   image: 'https://conacoco.com/wp-content/uploads/2025/04/Desain-tanpa-judul.png',
    //   title: 'COCONUT SHELL CHARCOAL',
    //   description: 'Coconut Shell Charcoal is made from 100% selected natural coconut shells, with no added chemicals. Perfect for BBQ, shisha/hookah, and the food industry.',
    //   specifications: {
    //     "Raw Material": "100% Coconut Shell",
    //     "Fixed Carbon": "≥ 75%",
    //     "Ash Content": "≤ 3%",
    //     "Moisture": "≤ 12%",
    //     "Volatile Matter": "≤ 15%",
    //     "Size & Packaging": "3-5 mm, 5-10 mm"
    //   }
    // },
    // {
    //   id: 3,
    //   image: 'https://conacoco.com/wp-content/uploads/2022/10/Product-8.jpg',
    //   title: 'ROUND / STICK SHAPE',
    //   description: 'Hardwood charcoal is our best-selling product. In terms of quality, charcoal made of hardwood is always a great choice, as it offers much better quality than other options.',
    //   specifications: {
    //     "Packaging": "Retail pack or bulk",
    //     "Presentation": "PUD IQF/Semi-IQF/Block",
    //     "Glazing": "0-50%",
    //     "Additives": "Chemical free",
    //     "Specific Gravity": "0.915",
    //     "Density (kg/m3)": "920",
    //   }
    // },
// ];

// function ProductDetailDialog({ product, onClose }) {
//   if (!product) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0">
//                 <Image
//                     src={product.image}
//                     alt={product.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
//                 />
//             </div>
//             <div className="w-full md:w-1/2 p-8">
//                 <h1 className="text-3xl font-extrabold text-orange-500">{product.title}</h1>
//                 <p className="mt-4 text-gray-300">{product.description}</p>
//                 <h3 className="mt-6 text-xl font-semibold">Specifications:</h3>
//                 <ul className="mt-4 space-y-2 text-gray-400">
//                 {Object.entries(product.specifications).map(([key, value]) => (
//                     <li key={key} className="flex justify-between border-b border-gray-700 py-1">
//                     <span className="font-medium text-gray-200">{key}:</span>
//                     <span>{value}</span>
//                     </li>
//                 ))}
//                 </ul>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ProductsGalleryPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const heroImages = [
//     'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg',
//     'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg',
//     'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg'
//   ];

//   return (
//     <main className="bg-gray-900 text-white">
//       <HeroSection
//         headline="Our Premium Products"
//         subtitle="Browse our collection of high-quality coconut charcoal briquettes."
//         imageUrls={heroImages}
//       />

//       <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {productsData.map((product) => (
//             <div 
//               key={product.id} 
//               className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300 cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <div className="relative w-full h-56">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-xl text-white group-hover:text-orange-500 transition-colors">
//                   {product.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-400">Click to see details</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ProductDetailDialog 
//         product={selectedProduct} 
//         onClose={() => setSelectedProduct(null)} 
//       />
//     </main>
//   );
// }

"use client";

import Image from 'next/image';
import HeroSection from '@/components/HeroSections';
import { motion } from 'framer-motion'; 
import FlippingProductCard from './components/FlippingProductCard';

const productsData = [
    {
      id: 1,
      image: 'https://conacoco.com/wp-content/uploads/2025/04/2-1.png',
      title: 'PILLOW CHARCOAL BBQ',
      description: 'High-Quality Pillow Charcoal is one of our best-selling products. When it comes to quality, it delivers outstanding performance with long-lasting heat, low ash, and clean burning. Trusted by BBQ lovers and professionals worldwide, pillow charcoal is made from pure coconut shell charcoal, processed hygienically and in an eco-friendly manner.',
      specifications: {
        "Raw Material": "Coconut shell charcoal",
        "Shape": "Pillow (cushion-shaped)",
        "Fixed Carbon": ">70%",
        "Ash Content": "<5%",
        "Moisture": "<8%",
        "Packing": "5 kg, 10 kg, 20 kg (customizable)"
      }
    },
    {
      id: 2,
      image: 'https://conacoco.com/wp-content/uploads/2025/04/Desain-tanpa-judul.png',
      title: 'COCONUT SHELL CHARCOAL',
      description: 'Coconut Shell Charcoal is made from 100% selected natural coconut shells, with no added chemicals. Perfect for BBQ, shisha/hookah, and the food industry.',
      specifications: {
        "Raw Material": "100% Coconut Shell",
        "Fixed Carbon": "≥ 75%",
        "Ash Content": "≤ 3%",
        "Moisture": "≤ 12%",
        "Volatile Matter": "≤ 15%",
        "Size & Packaging": "3-5 mm, 5-10 mm"
      }
    },
    {
      id: 3,
      image: 'https://conacoco.com/wp-content/uploads/2022/10/Product-8.jpg',
      title: 'ROUND / STICK SHAPE',
      description: 'Hardwood charcoal is our best-selling product. In terms of quality, charcoal made of hardwood is always a great choice, as it offers much better quality than other options.',
      specifications: {
        "Packaging": "Retail pack or bulk",
        "Presentation": "PUD IQF/Semi-IQF/Block",
        "Glazing": "0-50%",
        "Additives": "Chemical free",
        "Specific Gravity": "0.915",
        "Density (kg/m3)": "920",
      }
    },
];

export default function ProductsGalleryPage() {
    
    const heroImages = [
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg',
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg',
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg'
  ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="bg-gray-950 text-white">
            <HeroSection
                headline="Our Premium Products"
                subtitle="Browse our collection of high-quality coconut charcoal briquettes."
                imageUrls={heroImages}
            />

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {productsData.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <FlippingProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}