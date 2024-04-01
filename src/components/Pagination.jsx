import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageInput, setPageInput] = useState('');
  const [countryData, setCountryData] = useState([]);
  const countriesPerPage =9;

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => setCountryData(data));
  }, []);

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

  const currentCountries = countryData.slice((currentPage - 1) * countriesPerPage, currentPage * countriesPerPage);

  return (
    <div>
      <div>
        <div className="container items-center justify-center place-items-center md:ml-0 lg:ml-20">
          <div className="">
            <ul className="flex flex-wrap gap-5 justify-center h-[120px] mx-auto pl-10 place-items-center">
              {currentCountries.map(country => (
                <div className="items-center md:w-3/12 lg:w-3/12 justify-center" key={country.name.common}>
                  <img src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`} alt={country.name.common} className="w-[250px] items-center h-[120px]" />
                  <strong>{country.name.common}</strong>
                  <p><strong>Capital</strong>: {country.capital}</p>
                  <p><strong>Population</strong>: {country.population}</p>
                  <p><strong>Region</strong>: {country.region}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-96 mt-56">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 text-gray-700 mr-2"
        > <FaChevronLeft className="mr-1" />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 text-gray-700 ml-2"
        >
          <FaChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;



