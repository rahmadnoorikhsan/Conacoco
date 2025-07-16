'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CompanyOverview = ({ description }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-gray-950 py-16 sm:py-24">
            <motion.div
                className="container mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <Image
                        src="/conacocomaps.svg"
                        alt="Conacoco Location"
                        width={1024}
                        height={512}
                        className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-white"
                >
                    Company Overview
                </motion.h2>

                <motion.div variants={itemVariants} className="w-24 h-1 bg-yellow-500 mx-auto my-4"></motion.div>

                <motion.p
                    variants={itemVariants}
                    className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div variants={itemVariants} className="mt-8">
                    <Link
                        href="/about"
                        className="inline-block border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-yellow-500 hover:text-gray-900"
                    >
                        Read More
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CompanyOverview;