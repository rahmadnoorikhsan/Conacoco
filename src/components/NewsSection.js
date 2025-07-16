'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const newsData = [
  {
    id: 1,
    image: 'https://conacoco.com/wp-content/uploads/2025/04/14.png',
    category: 'Industry News',
    date: 'June 25, 2025',
    title: 'Global Demand for Eco-Friendly Charcoal on the Rise',
    excerpt: 'A new market report indicates a significant shift towards sustainable energy sources like coconut charcoal briquettes, driven by a growing environmental consciousness among consumers worldwide.',
    link: '/news/global-demand-rise',
  },
  {
    id: 2,
    image: 'https://conacoco.com/wp-content/uploads/2025/04/4-2.png',
    category: 'Company Update',
    date: 'June 18, 2025',
    title: 'Conacoco Expands Production with New High-Capacity Facility',
    excerpt: 'To meet growing international demand, we have officially launched our new state-of-the-art production facility, doubling our capacity and enhancing quality control measures.',
    link: '/news/production-expansion',
  },
  {
    id: 3,
    image: 'https://conacoco.com/wp-content/uploads/2025/04/18.png',
    category: 'Sustainability',
    date: 'June 12, 2025',
    title: 'Our Commitment to a Greener Supply Chain in Indonesia',
    excerpt: 'We are proud to announce our new partnership with local farmers to ensure a fully sustainable and traceable supply chain, from coconut shell sourcing to final product delivery.',
    link: '/news/green-supply-chain',
  }
];

const NewsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section id="news" className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest News & Articles
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-gray-300">
              Stay updated with the latest insights from Conacoco.
            </p>
          </div>
          <div className="flex space-x-3">
            <button ref={prevRef} className="p-2 rounded-full border border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button ref={nextRef} className="p-2 rounded-full border border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{}}
            className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden h-[480px] md:h-[420px]"
          >
            {newsData.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-3/5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                        &quot;{article.excerpt}&quot;
                      </p>
                      <h3 className="font-bold text-white text-lg">
                        {article.title}
                      </h3>
                      <div className="text-gray-400 text-sm mt-2">
                        <span>{article.category}</span>
                        <span className="mx-2">-</span>
                        <span>{article.date}</span>
                      </div>
                      <hr className="border-gray-700 my-6" />
                    </div>
                    <div className="flex justify-end">
                        <Link href={article.link}>
                            <div className="text-yellow-400 font-bold flex items-center group cursor-pointer w-fit">
                            Read News
                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </Link>
                    </div>
                  </div>
                  <div className="md:w-2/5 w-full h-80 md:h-auto relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/news">
            <div className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
              Read All News
            </div>
          </Link>
        </div>
        
      </div>
      <style jsx global>{`
        /* Sembunyikan tombol navigasi bawaan Swiper */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        /* Semua styling untuk .swiper-pagination bisa dihapus */
      `}</style>
    </section>
  );
};

export default NewsSection;
