import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageInput, setPageInput] = useState('');

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleInputChange = (e) => {
    setPageInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      const pageNumber = parseInt(pageInput);
      if (!isNaN(pageNumber)) {
        handlePageChange(pageNumber);
      }
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 mr-2"
      > previous
        <i className="fas fa-chevron-left"></i>
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 ml-2"
      > next
        {/* <i className="fas fa-chevron-right"></i> */}
      </button>
      <input
        type="number"
        value={pageInput}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        className="px-3 py-1 rounded border border-gray-300 ml-2 w-20 text-center"
        placeholder="Go to page"
      />
    </div>
  );
};

export default Pagination;

