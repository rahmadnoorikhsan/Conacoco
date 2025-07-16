// src/components/OurMission.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const OurMission = ({ missionImages }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % missionImages.length);
        }, 4000);
        return () => clearInterval(imageInterval);
    },);

    return (
        <section className="bg-gray-100 pt-8 sm:pt-0 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">

                    <motion.div
                        className="bg-gray-950 p-8 md:p-12 lg:p-16 rounded-l-lg flex flex-col"
                        initial={{ opacity: 0, x: '100%' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Our Mission
                        </h2>
                        <div className="w-24 h-1 bg-yellow-500 my-4"></div>

                        <ul className="space-y-4 text-lg text-gray-300 leading-relaxed flex-grow">
                            <li className="flex items-start">
                                <span className="text-yellow-500 font-bold mr-3 mt-1">✓</span>
                                <span>Deliver premium-grade, eco-friendly charcoal products for household, commercial, and industrial use.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-500 font-bold mr-3 mt-1">✓</span>
                                <span>Ensure a transparent and traceable supply chain from natural raw materials to global customers.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-500 font-bold mr-3 mt-1">✓</span>
                                <span>Promote sustainable production practices by supporting local farmers and charcoal artisans.</span>
                            </li>
                        </ul>

                        {/* <div className="mt-8">
                            <Link
                                href="/about"
                                className="inline-block border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-yellow-500 hover:text-gray-900"
                            >
                                See our company profile
                            </Link>
                        </div> */}
                    </motion.div>

                    <motion.div
                        className="relative w-full min-h-[400px] md:min-h-0 rounded-r-lg shadow-xl overflow-hidden"
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    >
                        <AnimatePresence>
                            <motion.div
                                key={imageIndex}
                                className="absolute inset-0 w-full h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, transition: { duration: 1 } }}
                            >
                                <Image
                                    src={missionImages[imageIndex]}
                                    alt={`Our Mission Image ${imageIndex + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OurMission;