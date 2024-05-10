import React, { useState, useEffect } from 'react';
import AxiosClient from '../../../hooks/AxiosClient';

const SelectCompany = ({selectedOption , setSelectedOption}) => {
  const [companies, setCompanies] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await AxiosClient.get('/admin/companies');
        setCompanies(response.data.companies); // Assuming companies are returned as an array
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">
        Select Company Type
      </label>

      <div className="relative z-20 bg-white dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? 'text-black dark:text-white' : ''
          }`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Select a company...
          </option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>

        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
          {/* You can add an icon or indicator here if needed */}
        </span>
      </div>
    </div>
  );
};

export default SelectCompany;
