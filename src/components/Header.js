'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full px-4 sm:px-12 py-4 z-50 text-white transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-sm' : 'bg-transparent'}`}
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/conacoco.png"
                            alt="Conacoco Logo"
                            width={160}
                            height={40}
                            className="h-12 w-auto"
                        />
                    </Link>

                    <ul className="hidden md:flex items-center space-x-8 text-lg">
                        <li><Link href="/" className={`transition-colors ${pathname === '/' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>Home</Link></li>
                        <li><Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>About</Link></li>
                        <li><Link href="/products" className={`transition-colors ${pathname === '/products' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>Products</Link></li>
                        <li><Link href="/gallery" className={`transition-colors ${pathname === '/gallery' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>Gallery</Link></li>
                        <li><Link href="/news" className={`transition-colors ${pathname === '/news' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>News</Link></li>
                        <li><Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-yellow-400 underline underline-offset-4' : 'hover:text-yellow-400'}`}>Contact</Link></li>
                    </ul>

                    <a
                        href="/contact"
                        className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2.5 px-7 rounded-full transition duration-300"
                    >
                        Request Quote
                    </a>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Open menu">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center text-white"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <button onClick={toggleMenu} className="absolute top-6 right-6" aria-label="Close menu">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <ul className="text-center space-y-8 text-3xl">
                            <li onClick={toggleMenu}><Link href="/">Home</Link></li>
                            <li onClick={toggleMenu}><Link href="/about">About</Link></li>
                            <li onClick={toggleMenu}><Link href="/products">Products</Link></li>
                            <li onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;