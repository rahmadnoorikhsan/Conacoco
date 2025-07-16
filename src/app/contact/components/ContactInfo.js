"use client";

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Let&apos;s talk Bussiness</h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">
                We are ready to provide the best quality charcoal for your needs. Contact us for quotes, samples, or partnership opportunities.
            </p>
            <div className="mt-10 space-y-6 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                    <FiMapPin className="h-7 w-6 flex-none text-yellow-500" aria-hidden="true" />
                    <span>Jl. Sinduharjo, Kec. Ngaglik, Kab. Sleman, Yogyakarta, Indonesia, 55581</span>
                </div>
                <div className="flex gap-x-4">
                    <FiPhone className="h-7 w-6 flex-none text-yellow-500" aria-hidden="true" />
                    <a href="tel:+6288985582838">+62 889 8558 2838</a>
                </div>
                <div className="flex gap-x-4">
                    <FiMail className="h-7 w-6 flex-none text-yellow-500" aria-hidden="true" />
                    <a href="mailto:sales@conacoco.com">sales@conacoco.com</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
