import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/Herosection';
import ServicesSection from './Components/Servicessection';
import ContactUsForm from './Components/ContactUsForm';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <div className="flex-grow">
        <ServicesSection />
      </div>
      <ContactUsForm />
      <Footer/>
    </div>
  );
}

export default App;
