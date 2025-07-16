"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { FiX, FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi';
import HeroSection from '@/components/HeroSections'; // Pastikan path ini benar

const galleryImages = [
    { id: 1, src: 'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg', alt: 'Charcoal production process', category: 'Production' },
    { id: 2, src: 'https://conacoco.com/wp-content/uploads/2025/04/2-1.png', alt: 'Pillow Charcoal BBQ', category: 'Products' },
    { id: 3, src: 'https://conacoco.com/wp-content/uploads/2022/10/Shipment-1.jpg', alt: 'Product shipment ready for export', category: 'Shipment' },
    { id: 4, src: 'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg', alt: 'High quality charcoal briquettes', category: 'Products' },
    { id: 5, src: 'https://conacoco.com/wp-content/uploads/2022/10/Production-Process-4.jpg', alt: 'Sifting charcoal material', category: 'Production' },
    { id: 6, src: 'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg', alt: 'Charcoal briquettes in baskets', category: 'Products' },
    { id: 7, src: 'https://conacoco.com/wp-content/uploads/2022/10/Shipment-3.jpg', alt: 'Container loading for shipment', category: 'Shipment' },
    { id: 8, src: 'https://conacoco.com/wp-content/uploads/2022/10/Production-Process-3.jpg', alt: 'Charcoal molding machine', category: 'Production' },
];

const filters = ['All', 'Products', 'Production', 'Shipment'];

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image src={image.src} alt={image.alt} width={1920} height={1080} className="object-contain max-w-full max-h-full" />
            </motion.div>
            
            <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"><FiX size={32} /></button>
            <button onClick={onPrev} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 p-2 rounded-full"><FiArrowLeft size={28} /></button>
            <button onClick={onNext} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 p-2 rounded-full"><FiArrowRight size={28} /></button>
        </motion.div>
    );
};

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const filteredImages = activeFilter === 'All' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeFilter);
    
    const openLightbox = (image) => {
        const indexInFiltered = filteredImages.findIndex(img => img.id === image.id);
        setSelectedImageIndex(indexInFiltered);
    };

    const closeLightbox = () => setSelectedImageIndex(null);
    const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
    const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
        <main className="bg-gray-950 text-white">
            <HeroSection
                headline="Our Gallery"
                subtitle="Explore the journey of our premium coconut charcoal, from production to global shipment."
                imageUrls={[galleryImages[0].src, galleryImages[3].src, galleryImages[6].src]}
            />

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div layout>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        <AnimatePresence>
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="group relative cursor-pointer overflow-hidden rounded-lg"
                                    onClick={() => openLightbox(image)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                        <FiMaximize2 className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </Masonry>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <Lightbox 
                        image={filteredImages[selectedImageIndex]}
                        onClose={closeLightbox}
                        onNext={nextImage}
                        onPrev={prevImage}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}