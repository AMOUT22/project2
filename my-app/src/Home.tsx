import React from 'react';
import bagg from './baag.png';

function HomePage() {
  return (
    <div className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${bagg})` }}>

      <div className="text-center text-white text-[#005BAF]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 px-5 text-[#005BAF]">Trouvons ensemble votre meilleure acquisition</h1>
        <p className="text-lg md:text-xl mb-8 font-bold text-[#005BAF]">Discover amazing products and more!</p>
        <div className="max-w-md mx-auto px-4">
        <div className="flex bg-gray-100 p-2 rounded-md">
      <input
        type="text"
        placeholder="Insérez un quartier, ou une adresse"
        className="py-2 px-4 w-full rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button className="bg-[#005BAF] text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z" fill="white"/>
</svg>
      </button>
    </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
