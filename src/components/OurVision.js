'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurVision = () => {
  const imageVariants = {
    inView: {
      opacity: 1,
      x: 0,
      y: -32,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      y: [-30, -40, -30],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="bg-gray-100 py-24 sm:pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 md:items-stretch">

            <motion.div
              className="relative md:-translate-y-8 z-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView="inView"
              whileHover="hover" 
              variants={imageVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative w-full h-full min-h-[400px] md:min-h-0 rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="https://conacoco.com/wp-content/uploads/2025/04/15.png"
                  alt="Our Vision Product"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              className="relative bg-gray-950 p-8 md:p-22 lg:p-20 rounded-lg shadow-2xl mt-[-50px] md:mt-0 md:-ml-16 z-20 flex flex-col justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-yellow-500 my-4"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                To become a world-class provider of natural charcoal by prioritizing quality, sustainability, and global trust.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;