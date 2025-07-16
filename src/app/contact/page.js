"use client";

import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import HeroSection from '@/components/HeroSections';

export default function ContactPage() {

    const heroContactImages = [
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg',
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg',
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg'
    ];

    return (
        <main className="bg-gray-950">

            <HeroSection
                headline="Get in Touch"
                subtitle="We're here to answer your questions about our products, partnerships, and services."
                imageUrls={heroContactImages}
            />

            <div className="relative isolate overflow-hidden">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}