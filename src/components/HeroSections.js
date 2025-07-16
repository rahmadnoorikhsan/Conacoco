'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = ({ headline, subtitle, imageUrls }) => {
    const rotatingTexts = [
        'Premium Coconut Charcoal Briquettes',
        'High-Quality for Shisha & BBQ',
        'Eco-Friendly & Long-Lasting',
        'Global Manufacturer & Exporter',
    ];

    const [index, setIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [rotatingTexts.length]);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000);
        return () => clearInterval(imageInterval);
    }, [imageUrls.length]);

    return (
        <div className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={imageIndex}
                    className="absolute inset-0 w-full h-full bg-cover bg-center ken-burns-effect"
                    style={{ backgroundImage: `url(${imageUrls[imageIndex]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
                    exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeIn' } }}
                />
            </AnimatePresence>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* ▼▼▼ PERUBAHAN UTAMA ADA DI SINI ▼▼▼ */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} // Ganti 'whileInView' menjadi 'animate'
                transition={{ duration: 1, delay: 0.5 }} // Tambahkan sedikit delay agar lebih smooth
                // Hapus 'viewport' karena tidak lagi diperlukan
                className="relative z-10 p-4"
            >
                <div className="flex flex-col items-center max-w-4xl">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-bold mb-4">
                        {headline}
                    </h1>

                    <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-2xl max-w-3xl mx-auto"
                            >
                                {rotatingTexts[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <p className="mt-4 text-base md:text-lg text-gray-200">{subtitle}</p>
                </div>
                <div className="mt-8">
                    <a href="#products" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 mr-4">
                        Our Products
                    </a>
                    <a
                        href="/contact"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Request Quote
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;