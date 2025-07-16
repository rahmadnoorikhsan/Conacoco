'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const ProductsPage = ({ productsData }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const productIndex = ((page % productsData.length) + productsData.length) % productsData.length;
    const product = productsData[productIndex];
    const catalogPdfUrl = "https://drive.google.com/file/d/1jAc_0unlgTW65bcXelcdwfpfTUbquzMp/view";

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                    <Image
                        src={product.image}
                        alt={`${product.title} background`}
                        layout="fill"
                        objectFit="cover"
                        className="filter blur-2xl scale-125 brightness-50"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative w-full h-full max-h-[700px] max-w-6xl">
                <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            className="absolute w-[85vw] md:w-[70vw] lg:w-[60vw] max-w-4xl aspect-[4/3] md:aspect-video"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = Math.abs(offset.x) * velocity.x;
                                if (swipe < -10000) {
                                    paginate(1);
                                } else if (swipe > 10000) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <div className="w-full h-full bg-gray-950 rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                    <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" />
                                </div>

                                <div className="text-white">
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">{product.title}</h3>
                                    <p className="mt-2 text-gray-300 text-sm md:text-base line-clamp-3 flex-grow">
                                        {product.description}
                                    </p>
                                    <hr className="my-4 border-gray-700" />
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Specifications:</h4>
                                        <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <li key={key} className="flex justify-between">
                                                    <span>{key}:</span>
                                                    <span className="font-medium text-gray-200">{value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                    <button onClick={() => paginate(-1)} className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={() => paginate(1)} className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <motion.a
                href={catalogPdfUrl}
                download="Conacoco-Product-Catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 flex items-center space-x-2 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                <span>Download Catalog</span>
            </motion.a>
        </div>
    );
};

export default ProductsPage;