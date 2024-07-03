import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './servicecard';
import FullWidthHeading from './FullWidthHeading';

import constuctImage  from '../assets/Const.jpg';
import financeImage  from '../assets/money.jpg';
import consultantImage  from '../assets/constult.jpg';

const services = [
  {
    title: 'Finance Services - Empowering You To Achieve Your Goals',
    description: 'ATTPL Finance Services offers a range of loan and insurance solutions to help you achieve your financial goals. Our financial experts will provide you with tailor-made solutions that cater to your specific needs. We work with a range of financial institutions to provide you with the best possible interest rates, terms, and conditions. Our financial solutions include personal loans, business loans, insurance services, and more. We are committed to helping you achieve your financial goals and objectives.',
    image: financeImage,
  },
  {
    title: 'Construction Services - Building Better Communities',
    description: 'ATTPL Infra Services offers a comprehensive range of construction services that cater to the diverse needs of our clients. We undertake building construction, civil engineering, and project management services for residential, commercial, and industrial projects. Our professionals collaborate with our clients to ensure their requirements are met at every stage of the construction process. We are committed to delivering high-quality projects that are cost-effective, innovative, and meet the clients',
    image: constuctImage,
  },
  {
    title: 'Consultancy - Unlocking Your Business Potential',
    description: 'ATTPL Consultancy provides legal, corporate, and financial advisory services to businesses. We have a team of experienced professionals who have the expertise to provide practical solutions to complex business problems. Our consultancy services include legal advisory, financial advisory, corporate advisory, and risk management. Our professionals work closely with our clients to understand their business needs and provide solutions that cater to their requirements. We are committed to unlocking your business potential and ensuring your success.',
    image: consultantImage,
  }
];

const ServicesSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-100" style={{marginBottom : "2rem"}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12"><FullWidthHeading title="Our Service"/> </h2>
        <div className="relative w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full"
            >
              <ServiceCard service={services[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
