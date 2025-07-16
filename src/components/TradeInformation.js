'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileSignature, FaMoneyBillWave, FaGlobe, FaAnchor, FaBoxOpen } from 'react-icons/fa';

const tradeData = [
  {
    title: 'Payment Terms',
    description: 'TT and L/C at sight irrevocable',
    icon: <FaFileSignature size={22} />,
  },
  {
    title: 'Payment Currency',
    description: 'US Dollar',
    icon: <FaMoneyBillWave size={22} />,
  },
  {
    title: 'Shipment Terms',
    description: 'Exwork, FOB, CNF and CIF',
    icon: <FaGlobe size={22} />,
  },
  {
    title: 'MOQ',
    description: '18 MT or 20Ft',
    icon: <FaBoxOpen size={22} />,
  },
  {
    title: 'Loading Port',
    description: 'Tanjung Emas and Tanjung Perak Port',
    icon: <FaAnchor size={22} />,
  },
];

const TradeInformation = () => {
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
    <motion.section 
      className="bg-gray-950 py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Trade Information</h2>
          <p className="text-xl text-yellow-500 font-semibold mt-2">CONACOCO</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto my-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 gap-y-8 items-center"
          >
            {/* --- GARIS VERTIKAL TUNGGAL --- */}
            <div 
              className="w-0.5 bg-gray-700 justify-self-center"
              style={{ 
                gridRow: `1 / ${tradeData.length + 1}`,
                gridColumn: '2 / 3',
                height: '100%',
                clipPath: 'inset(24px 0px 24px 0px)' 
              }}
            ></div>
            
            {tradeData.map((item, index) => {
              const isRightSide = index % 2 !== 0; 
              const contentStyle = { gridRow: index + 1, gridColumn: isRightSide ? 3 : 1 };
              const iconStyle = { gridRow: index + 1, gridColumn: 2 };

              return (
                <React.Fragment key={index}>
                  {/* ================================================================== */}
                  {/* PERUBAHAN 2: Mengubah text-align menjadi 'text-center'       */}
                  <motion.div variants={itemVariants} style={contentStyle} className="bg-gray-800 rounded-lg shadow-xl px-6 py-4 text-center">
                    <h3 className="mb-2 font-bold text-yellow-500 text-lg">{item.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-gray-300">{item.description}</p>
                  </motion.div>

                  {/* --- IKON --- */}
                  <motion.div variants={itemVariants} style={iconStyle} className="z-10 flex items-center justify-center bg-yellow-500 shadow-xl w-12 h-12 rounded-full text-gray-900">
                    {item.icon}
                  </motion.div>
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-20 max-w-3xl mx-auto">
            <p className="text-gray-400 leading-relaxed">
                We’d be happy to send you a sample! Kindly note that the shipping cost will be charged to you. Please share your name, complete address, and destination country so we can arrange the shipment accordingly.
            </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TradeInformation;