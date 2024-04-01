import React, { useState } from 'react';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center">
  <div className="mb-2 md:mb-0 md:mr-4">
    <p className="text-xl md:text-2xl">View of countries</p>
    <p className="text-sm md:text-base">Page 1 of 5</p>
  </div>
  <div className="text-xl">
    <select className="w-full md:w-auto">
      <option value="">Select continent</option>
      <option value="">Africa</option>
      <option value="">Asian</option>
      <option value="">South America</option>
      <option value="">North America</option>
      <option value="">European</option>
      <option value="">Ocean</option>
      <option value="">Antarctica</option>
    </select>
  </div>
</div>

  );
};

export default MyComponent;




