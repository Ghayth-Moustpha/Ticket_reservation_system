import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosClient from '../../hooks/AxiosClient';
import { useStateContext } from '../../hooks/contextProvider';
import { FaceSharp, FlagSharp } from '@material-ui/icons';

const Stations = () => {
  const [Stations, setStations] = useState([]);
  const [loading , setIsLoading] = useState(true) ; 
  const {API} = useStateContext();
  useEffect(() => {
    // Fetch Stations data from the API
    const fetchStations = async () => {
      try {
       await AxiosClient.get('/api/stations').then ((response)=>{
        setStations(response.data)
       })
       .then (()=>  setIsLoading (false) ) ; // Assuming response.data is an array of Stations
       
      } catch (error) {
        console.error('Error fetching Stations:', error);
      }
      
    };

    fetchStations();
  }, []);
  if (loading ) {
    return (<h5>Loading .. </h5> ) ; 
  }
  
  const deleteStations = ()=>
  {
    
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Travel Stations</h4>
      <Link
        to="./add"
        className="m-4 inline-flex  justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Add New Stations
      </Link>
      <div className="flex flex-col">
        {/* Stations List Header */}
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">name</h5>
          </div>
          
      
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">description</h5>
          </div>
         
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Action</h5>
          </div>
        </div>

        {/* Stations List Items */}
        {Stations.length >0 && Stations.map((Stations, index) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${
              index === Stations.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={Stations.id}
          >
            <div className="flex  gap-4 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
              </div>
              <p className="text-black dark:text-white">{Stations.name} </p>
            </div>
          
          
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{Stations.describtion}</p>
            </div>
           
            <div className="p-2.5 text-center xl:p-5">
           
            <button
             onClick={deleteStations}
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

export default Stations;
