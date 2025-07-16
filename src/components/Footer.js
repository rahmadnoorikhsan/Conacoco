// import Link from 'next/link';
// import Image from 'next/image';
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-950 text-gray-300">
//       {/* Bagian Atas: Call to Action */}
//       <div className="container mx-auto px-6 py-12 text-center border-b border-gray-800">
//         <h2 className="text-3xl font-bold text-white">Ready to Grow Your Business?</h2>
//         <p className="mt-4 max-w-2xl mx-auto text-gray-400">
//           Let&apos;s start a conversation. Contact us today for a free, no-obligation quote and discover how our premium charcoal can benefit you.
//         </p>
//         <Link href="/contact" className="mt-8 inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300">
//           Request Quote
//         </Link>
//       </div>

//       {/* Bagian Utama: Info & Menu */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* Kolom 1: Logo dan Alamat */}
//           <div className="space-y-4">
//             <Link href="/" className="inline-block">
//                 {/* Ganti dengan path logo Anda yang benar */}
//                 <Image src="/conacoco.png" alt="Conacoco Logo" width={150} height={60} />
//             </Link> 
//             <p className="text-sm">
//               Jl. Sinduharjo, Kec. Ngaglik, <br />
//               Kab. Sleman, Daerah Istimewa Yogyakarta, <br />
//               Indonesia, 55581
//             </p>
//           </div>

//           {/* Kolom 2: Kontak */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="tel:+62123456789" className="hover:text-yellow-500 transition-colors">+62 123 456 789</a></li>
//               <li><a href="mailto:sales@conacoco.com" className="hover:text-yellow-500 transition-colors">sales@conacoco.com</a></li>
//             </ul>
//           </div>

//           {/* Kolom 3: Menu */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
//               <li><Link href="/products" className="hover:text-yellow-500 transition-colors">Products</Link></li>
//               <li><Link href="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link></li>
//               <li><Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Kolom 4: Follow Us */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaFacebookF size={20} /></a>
//               <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaInstagram size={20} /></a>
//               <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaTwitter size={20} /></a>
//               <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaLinkedinIn size={20} /></a>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bagian Bawah: Copyright */}
//       <div className="bg-gray-900 py-4">
//         <div className="container mx-auto px-6 text-center text-sm text-gray-500">
//           Copyright &copy; 2022 Conacoco | Export Indonesia. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Link from 'next/link';
// import Image from 'next/image';
// import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';
// import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
// import { IoIosArrowForward } from 'react-icons/io';

// export default function Footer() {

//   const sectionLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About Us' },
//     { href: '/local-trade', label: 'Local trade' },
//     { href: '/export-trade', label: 'Export trade' },
//     { href: '/gallery', label: 'Gallery' },
//     { href: '/contact', label: 'Contact Us' },
//   ];

//   const companyTerms = [
//     { label: 'Price: FOB, CNF, CIF' },
//     { label: 'Payment: T/T or L/C' },
//     { label: 'Port: Belawan, Indonesia' },
//     { label: 'MOQ: Contact Us for more' },
//     { label: 'Shipping: Ocean freight and air freight' },
//   ];

//   const socialLinks = [
//     { href: '#', icon: <FaTiktok />, label: 'TikTok' },
//     { href: '#', icon: <FaInstagram />, label: 'Instagram' },
//     { href: '#', icon: <FaFacebookF />, label: 'Facebook' },
//   ];

//   return (
//     <footer className="bg-gray-950 text-white">
//       <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//           <div className="space-y-4">
//             <Link href="/" className="inline-block">
//                 <Image src="/conacoco.png" alt="Conacoco Logo" width={150} height={60} />
//             </Link> 
//             <p className="text-sm text-gray-300">
//                Conacoco - Indonesia's natural wealth meets global innovation.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-yellow-500 inline-block">Section</h3>
//             <ul className="space-y-3 mt-4 text-sm">
//               {sectionLinks.map(link => (
//                 <li key={link.label} className="flex items-center">
//                     <IoIosArrowForward className="text-yellow-500 mr-2" />
//                     <Link href={link.href} className="hover:text-yellow-500 transition-colors">{link.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-yellow-500 inline-block">Company Term</h3>
//             <ul className="space-y-3 mt-4 text-sm">
//               {companyTerms.map(term => (
//                  <li key={term.label} className="flex items-start">
//                     <IoIosArrowForward className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
//                     <span>{term.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Kolom 4: Slogan */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b-2 border-yellow-500 inline-block">Slogan</h3>
//             <blockquote className="mt-4 text-sm italic text-gray-300">
//               "Growing with diversity; innovation, quality, sustainability."
//             </blockquote>
//           </div>
//         </div>

//         <div className="mt-16 mb-8 border-t border-yellow-800/50"></div>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
//             <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300">
//                 <div className="flex items-center gap-2">
//                     <FiMapPin className="text-yellow-400"/>
//                     <span>Yogyakarta, Indonesia</span>
//                 </div>
//                  <div className="flex items-center gap-2">
//                     <FiMail className="text-yellow-400"/>
//                     <a href="mailto:sales@conacoco.com" className="hover:text-yellow-300">sales@conacoco.com</a>
//                 </div>
//                  <div className="flex items-center gap-2">
//                     <FiPhone className="text-yellow-400"/>
//                     <a href="tel:+6288985582838" className="hover:text-yellow-300">+62 889 8558 2838</a>
//                 </div>
//             </div>
//             <div className="flex items-center gap-3">
//               {socialLinks.map(social => (
//                 <a 
//                   key={social.label} 
//                   href={social.href} 
//                   aria-label={social.label} 
//                   className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-yellow-900 rounded-md hover:bg-yellow-400 transition-colors"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

export default function Footer() {

  const sectionLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  const companyTerms = [
    { label: 'Payment: TT and L/C sight irrevocable' },
    { label: 'Currency: US Dollar' },
    { label: 'Shipment: Exwork, FOB, CNF and CIF' },
    { label: 'MOQ: 18 MT or 20Ft' },
    { label: 'Shipping: Tanjung Emas and Tanjung Perak Port' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/conacoco?trk=public_profile_topcard-current-company', icon: <FaLinkedin />, label: 'TikTok' },
    { href: 'https://www.instagram.com/conacoco_com/', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.facebook.com/CONACOCOIDN/', icon: <FaFacebookF />, label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y">
            <Link href="/" className="inline-block">
              <Image src="/conacoco.png" alt="Conacoco Logo" width={150} height={60} />
            </Link>
            <p className="text-base">
              Conacoco - Indonesia's natural wealth meets global innovation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-5 pb-2 border-b-2 border-yellow-400">Section</h3>
            <ul className="space-y-4 mt-4 text-base">
              {sectionLinks.map(link => (
                <li key={link.label} className="flex items-center">
                  <IoIosArrowForward className="text-yellow-500 mr-2" />
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-5 pb-2 border-b-2 border-yellow-400">Company Term</h3>
            <ul className="space-y-4 mt-4 text-base">
              {companyTerms.map(term => (
                <li key={term.label} className="flex items-start">
                  <IoIosArrowForward className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{term.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-5 pb-2 border-b-2 border-yellow-400">Slogan</h3>
            <blockquote className="mt-4 text-base italic">
              &quot;Sparking Partnerships, Building Sustainability&quot;
            </blockquote>
          </div>
        </div>

        <div className="mt-20 mb-10 border-t border-yellow-500/20"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-base">
          <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-yellow-500" />
              <a href='https://www.google.com/maps/dir//JIH+Hospital+Jl.+Ring+Road+Utara+No.160+Perumnas+Condong+Catur,+Condong+Catur+Depok,+Sleman+Regency,+Special+Region+of+Yogyakarta+55283/@-7.7575571,110.4035724,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e7a599f4ed7f93d:0x2e244e0d7bc758cb!2m2!1d110.4035724!2d-7.7575571?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D' className="hover:text-yellow-400">Yogyakarta, Indonesia</a>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-yellow-500" />
              <a href="mailto:sales@conacoco.com" className="hover:text-yellow-400">sales@conacoco.com</a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-yellow-500" />
              <a href="tel:+6288985582838" className="hover:text-yellow-400">+62 889 8558 2838</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-6 text-center text-sm text-gray-500">
            Copyright &copy; 2022 Conacoco | Export Indonesia. All Rights Reserved.
          </div>
        </div>
    </footer>
  );
}
