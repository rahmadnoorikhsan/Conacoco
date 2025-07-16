// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useAnimation, useMotionValue } from 'framer-motion';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const Gallery = ({ images }) => {
//   const controls = useAnimation();
//   const [isHovered, setIsHovered] = useState(false);
//   const x = useMotionValue(0);

//   const totalWidth = (384 + 16) * (images?.length || 0);

//   const startAnimation = () => {
//   controls.start({
//     x: [0, -totalWidth],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: 'loop',
//         duration: 100,
//         ease: 'linear',
//       },
//     },
//   });
// };


//   const stopAnimation = () => {
//     controls.stop();
//   };

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     if (isHovered) {
//       stopAnimation();
//     } else {
//       startAnimation();
//     }
//   }, [isHovered, images]);

//   if (!images || images.length === 0) {
//     return (
//       <section className="bg-gray-900 py-16 sm:py-24">
//         <div className="container mx-auto text-center">Loading Gallery...</div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-gray-950 py-16 sm:py-10">
//       <div
//         className="w-full overflow-hidden mt-12"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <motion.div
//           className="flex space-x-4"
//           animate={controls}
//           style={{ x }}
//         >
//           {[...images, ...images].map((image, i) => (
//             <div
//               key={i}
//               className="relative flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden shadow-lg group"
//             >
//               <Image
//                 src={image.src}
//                 alt={`Gallery image ${i + 1}`}
//                 width={384}
//                 height={256}
//                 priority={i < 4}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                 }}
//                 className="transition-transform duration-300 ease-in-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-transparent group-hover:bg-transparent group-hover:bg-opacity-30 transition-opacity duration-50000"></div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const speed = 30; // px per second
  const frameTime = 1000 / 60; // 60 FPS
  const shiftPerFrame = speed * (frameTime / 1000); // pixel per frame

  const totalWidth = (384 + 16) * (images?.length || 0);

  useAnimationFrame(() => {
    if (!isHovered && totalWidth > 0) {
      const current = x.get();
      const next = current - shiftPerFrame;

      // Reset ke 0 kalau sudah melewati totalWidth
      x.set(next <= -totalWidth ? 0 : next);
    }
  });

  if (!images || images.length === 0) {
    return (
      <section className="bg-black py-16 sm:py-24">
        <div className="container mx-auto text-center text-white">Loading Gallery...</div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Gallery</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          A glimpse into our production process, high-quality materials, and finished products ready for global shipping.
        </p>
      </div>

      <div
        className="w-full overflow-hidden mt-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <motion.div
          className="flex space-x-4"
          style={{ x }}
        >
          {[...images, ...images].map((image, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={image.src}
                alt={`Gallery image ${i + 1}`}
                width={384}
                height={256}
                priority={i < 4}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-opacity-30 transition-opacity duration-5000"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
