import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosClient from '../../hooks/AxiosClient';
import SelectCompany from '../../components/Forms/SelectGroup/SelectCopany';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddCoordinators = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !selectedCompany) {
      alert('Please fill out all required fields.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("company_id", selectedCompany);

      const response = await AxiosClient.post('/admin/coordinators', formData);

      // Handle success (e.g., show success message, redirect)
      console.log('Coordinator added successfully:', response.data);

      // Navigate back or to a different route upon successful submission
      navigate(-1); // Go back one step in history
    } catch (error) {
      console.error('Error adding coordinator:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add New Coordinator" />

      <div className="container mx-auto">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Coordinator Form</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-5.5">
              <label className="mb-2.5 block text-black dark:text-white">Company</label>
              {/* Replace with your SelectCompany component */}
              <SelectCompany selectedOption={selectedCompany} setSelectedOption={setSelectedCompany} />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Add New Coordinator 
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoordinators;
