import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosClient from '../../hooks/AxiosClient';
import { useStateContext } from '../../hooks/contextProvider';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading , setIsLoading] = useState(true) ; 
  const {API} = useStateContext();
  useEffect(() => {
    // Fetch companies data from the API
    const fetchCompanies = async () => {
      try {
       await AxiosClient.get('/admin/companies').then ((response)=>{
        setCompanies(response.data.companies)
       })
       .then (()=>  setIsLoading (false) ) ; // Assuming response.data is an array of companies
       
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
      
    };

    fetchCompanies();
  }, []);
  if (loading ) {
    return (<h5>Loading .. </h5> ) ; 
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Travel Companies</h4>
      <Link
        to="./add"
        className="m-4 inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Add New Company
      </Link>
      <div className="flex flex-col">
        {/* Company List Header */}
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Company</h5>
          </div>
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Type</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Address</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Phone</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Website</h5>
          </div>
        </div>

        {/* Company List Items */}
        {companies.map((company, index) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-6 ${
              index === companies.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={company.id}
          >
            <div className="flex items-center gap-4 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={`${API}/storage/${company.logo}`} alt="Company Logo" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <p className="text-black dark:text-white">{company.name}</p>
            </div>
          
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{company.type}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{company.address}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{company.email}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{company.phone}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
                <a className="text-black dark:text-white" href={company.website}>link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
