"use client";

import HeroSection from "@/components/HeroSections";
import Image from 'next/image';
import IconFlower from '@/app/about/components/IconFlower';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBullseye, FaLeaf, FaUsers, FaCheckCircle } from 'react-icons/fa';

const AnimatedSection = ({ children, className, direction = 'up' }) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'up' ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// Komponen utama halaman "About Us"
export default function AboutPage() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Lacak dari saat bagian bawah seksi masuk, hingga bagian atasnya keluar
    });

    // Membuat nilai 'y' yang bergerak lebih lambat dari scroll (efek parallax)
    const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);


    const backgroundImages = [
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg',
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg',
        'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg'
    ];

    const teamMembers = [
        { id: 1, name: 'Malik Arif Rahman', role: 'CO Founder', image: 'https://conacoco.com/wp-content/uploads/2025/04/Blue-and-White-Paper-Minimalist-CEO-Quote-Instagram-Post.png' },
        { id: 2, name: 'Malik Arif Rahman', role: 'CO Founder', image: 'https://conacoco.com/wp-content/uploads/2025/04/Blue-and-White-Paper-Minimalist-CEO-Quote-Instagram-Post.png' },
        { id: 3, name: 'Malik Arif Rahman', role: 'CO Founder', image: 'https://conacoco.com/wp-content/uploads/2025/04/Blue-and-White-Paper-Minimalist-CEO-Quote-Instagram-Post.png' },
    ];

    // 2. Data untuk bagian "Our Goals" dengan ikon
    const conacocoGoals = [
        {
            id: 1,
            icon: <FaBullseye className="text-5xl text-yellow-500 mb-4" />,
            title: "Top Exporter",
            description: "To become one of the top five coconut charcoal exporters from Indonesia by 2030."
        },
        {
            id: 2,
            icon: <FaLeaf className="text-5xl text-yellow-500 mb-4" />,
            title: "Sustainability",
            description: "To promote sustainable charcoal production across Indonesia."
        },
        {
            id: 3,
            icon: <FaUsers className="text-5xl text-yellow-500 mb-4" />,
            title: "Empowerment",
            description: "To empower local farmers and artisans within the supply chain."
        },
        {
            id: 4,
            icon: <FaCheckCircle className="text-5xl text-yellow-500 mb-4" />,
            title: "Quality Standard",
            description: "To consistently deliver products that meet international quality standards."
        }
    ];

    // Varian animasi untuk efek stagger
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const visionData = {
        title: "Our Vision",
        description: "To become a world-class provider of natural charcoal by prioritizing quality, sustainability, and global trust."
    };

    const missionData = {
        title: "Our Mission",
        // Mengubah deskripsi menjadi array untuk list
        items: [
            "Deliver premium-grade, eco-friendly charcoal products for household, commercial, and industrial use.",
            "Ensure a transparent and traceable supply chain from natural raw materials to global customers.",
            "Promote sustainable production practices by supporting local farmers and charcoal artisans."
        ]
    };

    return (
        <main className="bg-gray-950 text-white">
            <HeroSection
                headline={'About Conacoco'}
                subtitle={'Discover the story behind the leading manufacturer of coconut charcoal briquettes.'}
                imageUrls={backgroundImages}
            />

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24"> {/* Menambah jarak antar seksi */}

                <AnimatedSection className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-yellow-500 whitespace-nowrap">
                        Company Overview
                    </h1>
                    <p className="mt-6 max-w-4xl mx-auto text-lg text-white leading-relaxed">
                        CONACOCO is a trusted brand under Malqorporate Group, specializing in the production and global distribution of premium-quality coconut charcoal. Headquartered in Indonesia—one of the world’s largest coconut-producing countries—we transform coconut shells into sustainable, eco-friendly charcoal products that meet international standards.
                    </p>
                    <p className="mt-4 max-w-4xl mx-auto text-lg text-white leading-relaxed">
                        With a commitment to integrity, innovation, and excellence, CONACOCO continuously enhances its production process to ensure consistent quality, environmental responsibility, and customer satisfaction. Our operations are supported by a reliable supply chain and a skilled team dedicated to delivering excellence at every stage.
                    </p>
                </AnimatedSection>

                <section ref={containerRef} className="relative h-screen overflow-hidden">
                    <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
                        <Image
                            src="https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg"
                            alt="Charcoal background"
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </motion.div>

                    <div className="relative z-10 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="container mx-auto bg-gray-900 text-white rounded-lg p-10 md:p-16 shadow-2xl max-w-6xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 text-yellow-500">{visionData.title}</h3>
                                    <p className="text-base leading-relaxed text-white">
                                        {visionData.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold mb-4 text-yellow-500">{missionData.title}</h3>
                                    <ul className="space-y-2 text-base leading-relaxed list-disc list-inside text-white">
                                        {missionData.items.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>   
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </section>

                <section>
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold sm:text-4xl text-yellow-500">Our Conacoco Goals</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                            Our strategic objectives to drive growth and create a positive impact.
                        </p>
                    </AnimatedSection>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {conacocoGoals.map((goal) => (
                            <motion.div
                                key={goal.id}
                                variants={itemVariants}
                                className="bg-gray-800 p-8 text-center rounded-xl shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
                            >
                                {goal.icon}
                                <h4 className="text-xl font-bold text-white mb-2">{goal.title}</h4>
                                <p className="text-gray-400 text-base">{goal.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section>
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl text-yellow-500 font-extrabold sm:text-4xl">Meet Our Team</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                            The passionate people behind our success.
                        </p>
                    </AnimatedSection>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {teamMembers.map((member) => (
                            <motion.div key={member.id} variants={itemVariants} className="group relative overflow-hidden rounded-lg shadow-lg">
                                <div className="relative w-full aspect-[2/2]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-yellow-400 text-sm">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </main>
    );
}