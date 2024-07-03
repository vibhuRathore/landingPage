import React from 'react';

const FullWidthHeading = ({ title}) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-900 py-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
    </div>
  );
}

export default FullWidthHeading;
