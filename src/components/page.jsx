import React, { useState } from 'react';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className=" py-4 px-20 flex  md:flex-row justify-between items-center ">
      <div>
        <p className="text-2xl">View of contries</p>
        <p>page 1 of 5</p>
      </div>
      <div className="text-xl">
     <select name="" id="">
      <option value="">select continent</option>
        <option value="">africa</option>
        <option value="">asian</option>
        <option value="">south america</option>
        <option value="">north america</option>
        <option value="">european</option>
        <option value="">ocean</option>
        <option value="">Antaratica</option>
        </select>
        </div>
        </div>
      <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange} />
    </div>
  );
};

export default MyComponent;




