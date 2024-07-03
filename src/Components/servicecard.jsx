import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
