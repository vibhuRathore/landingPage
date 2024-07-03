import React from 'react';
import contactPhoto from '../assets/markus-winkler-q3QPw37J6Xs-unsplash.jpg'

const ContactUsForm = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-8 lg:px-16 text-white flex justify-center items-center min-h-screen"
    style={{marginTop : "400px"}}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message" 
                rows="5"
              ></textarea>
            </div>
            <div className="text-center md:text-left">
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2">
          <img 
            src = {contactPhoto}
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
