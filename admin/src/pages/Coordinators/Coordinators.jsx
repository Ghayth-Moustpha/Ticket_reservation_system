import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosClient from '../../hooks/AxiosClient';
import { useStateContext } from '../../hooks/contextProvider';
import { FaceSharp, FlagSharp } from '@material-ui/icons';

const Coordinators = () => {
  const [Coordinators, setCoordinators] = useState([]);
  const [loading , setIsLoading] = useState(true) ; 
  const {API} = useStateContext();
  useEffect(() => {
    // Fetch Coordinators data from the API
    const fetchCoordinators = async () => {
      try {
       await AxiosClient.get('/admin/coordinators').then ((response)=>{
        setCoordinators(response.data.Coordinators)
       })
       .then (()=>  setIsLoading (false) ) ; // Assuming response.data is an array of Coordinators
       
      } catch (error) {
        console.error('Error fetching Coordinators:', error);
      }
      
    };

    fetchCoordinators();
  }, []);
  if (loading ) {
    return (<h5>Loading .. </h5> ) ; 
  }
  
  const deleteCoordinator = ()=>
  {
    
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Travel Coordinators</h4>
      <Link
        to="./add"
        className="m-4 inline-flex  justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Add New Coordinator
      </Link>
      <div className="flex flex-col">
        {/* coordinator List Header */}
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
          </div>
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">email</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Copmany</h5>
          </div>
         
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Action</h5>
          </div>
        </div>

        {/* coordinator List Items */}
        {Coordinators.length >0 && Coordinators.map((coordinator, index) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${
              index === Coordinators.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={coordinator.id}
          >
            <div className="flex  gap-4 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
              </div>
              <p className="text-black dark:text-white">{coordinator.user.first_name} {coordinator.user.last_name}</p>
            </div>
          
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{coordinator.user.email}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{coordinator.company.name}</p>
            </div>
           
            <div className="p-2.5 text-center xl:p-5">
           
            <button
             onClick={deleteCoordinator}
              className="mx-2 justify-center bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Delete  
            </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
