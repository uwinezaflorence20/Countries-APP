import React, { useState } from 'react';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = 5; // Total number of pages

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4 flex flex-col md:flex-row justify-between items-center pt-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-2xl">View of countries</p>
          <p>Page {currentPage} of {pageCount}</p>
        </div>
        <div className="text-center md:text-right">
          <select className="text-xl" name="" id="">
            <option value="">Select continent</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="south-america">South America</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="ocean">Ocean</option>
            <option value="antarctica">Antarctica</option>
          </select>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default MyComponent;




