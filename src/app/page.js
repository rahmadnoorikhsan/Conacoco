import HeroSection from "@/components/HeroSections";
import CompanyOverview from "@/components/CompanyOverview";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import Gallery from "@/components/Gallery";
import ProductsPage from "@/components/ProductPage";
import NewsSection from "@/components/NewsSection";
import TradeInformation from "@/components/TradeInformation";

export default function Home() {
  const backgroundImages = [
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-9.jpg',
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-7.jpg',
    'https://conacoco.com/wp-content/uploads/2022/10/Gallery-4.jpg'
  ];

  const missionImages = [
    'https://conacoco.com/wp-content/uploads/2025/04/4-2.png',
    'https://conacoco.com/wp-content/uploads/2025/04/13.png',
    'https://conacoco.com/wp-content/uploads/2025/04/18.png',
  ];

  const galleryImagesUrl = [
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/14.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/15.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/4-2.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/13.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/18.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/2-1.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/11.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/12.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/1-1.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/3-1.png', width: 1024, height: 768 },
    { src: 'https://conacoco.com/wp-content/uploads/2025/04/5-1.png', width: 1024, height: 768 }
  ];

  const productsData = [
    {
      id: 1,
      image: 'https://conacoco.com/wp-content/uploads/2025/04/2-1.png',
      title: 'PILLOW CHARCOAL BBQ',
      description: 'High-Quality Pillow Charcoal is one of our best-selling products. When it comes to quality, it delivers outstanding performance with long-lasting heat, low ash, and clean burning. Trusted by BBQ lovers and professionals worldwide, pillow charcoal is made from pure coconut shell charcoal, processed hygienically and in an eco-friendly manner.',
      specifications: {
        "Raw Material": "Coconut shell charcoal",
        "Shape": "Pillow (cushion-shaped)",
        "Fixed Carbon": ">70%",
        "Ash Content": "<5%",
        "Moisture": "<8%",
        "Packing": "5 kg, 10 kg, 20 kg (customizable)"
      }
    },
    {
      id: 2,
      image: 'https://conacoco.com/wp-content/uploads/2025/04/Desain-tanpa-judul.png',
      title: 'COCONUT SHELL CHARCOAL',
      description: 'Coconut Shell Charcoal is made from 100% selected natural coconut shells, with no added chemicals. Perfect for BBQ, shisha/hookah, and the food industry.',
      specifications: {
        "Raw Material": "100% Coconut Shell",
        "Fixed Carbon": "≥ 75%",
        "Ash Content": "≤ 3%",
        "Moisture": "≤ 12%",
        "Volatile Matter": "≤ 15%",
        "Size & Packaging": "3-5 mm, 5-10 mm"
      }
    },
    {
      id: 3,
      image: 'https://conacoco.com/wp-content/uploads/2022/10/Product-8.jpg',
      title: 'ROUND / STICK SHAPE',
      description: 'Hardwood charcoal is our best-selling product. In terms of quality, charcoal made of hardwood is always a great choice, as it offers much better quality than other options.',
      specifications: {
        "Packaging": "Retail pack or bulk",
        "Presentation": "PUD IQF/Semi-IQF/Block",
        "Glazing": "0-50%",
        "Additives": "Chemical free",
        "Specific Gravity": "0.915",
        "Density (kg/m3)": "920",
      }
    },
  ];

  return (
    <main>
      <HeroSection
        headline={'Welcome to Conacoco'}
        subtitle={'Your trusted partner for high-quality coconut charcoal briquettes from Indonesia'}
        imageUrls={backgroundImages} />
      <CompanyOverview
        description={"CONACOCO is a trusted brand under Malqorporate Group, specializing in the production and global distribution of premium-quality coconut charcoal. Headquartered in Indonesia—one of the world’s largest coconut-producing countries—we transform coconut shells into sustainable, eco-friendly charcoal products that meet international standards"} />
      <OurVision />
      <OurMission
        missionImages={missionImages}
      />
      <Gallery images={galleryImagesUrl} />
      <ProductsPage
        productsData={productsData} />
      <TradeInformation />
      <NewsSection />
    </main>
  );
}
