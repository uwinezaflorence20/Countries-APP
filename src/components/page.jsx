


import React, { useState } from 'react';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch data for the new page here
  };

  return (
    <div>
      {/* Your content here */}
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};

export default MyComponent;




