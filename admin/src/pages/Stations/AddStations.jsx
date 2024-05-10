import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosClient from '../../hooks/AxiosClient';
import SelectCompany from '../../components/Forms/SelectGroup/SelectCopany';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddStations = () => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description ) {
      alert('Please fill out all required fields.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("latitude", 11 );
      formData.append("longitude", 13 );

      
      const response = await AxiosClient.post('/api/stations', formData);

      // Handle success (e.g., show success message, redirect)
      console.log('Station  added successfully:', response.data);

      // Navigate back or to a different route upon successful submission
      navigate(-1); // Go back one step in history
    } catch (error) {
      console.error('Error adding Station :', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add New Station " />

      <div className="container mx-auto">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Station  Form</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white"> name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

            
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Enter description"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

          

            <button
              type="submit"
              className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Add New Station  
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStations;
