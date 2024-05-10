import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectCompanyType from '../../components/Forms/SelectGroup/SelectCompanyType';
import AxiosClient from '../../hooks/AxiosClient';
import { Navigate, useNavigate } from 'react-router-dom';

const AddCompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    description: '',
    type: '',
    logo: null,
    address: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyData((prevData) => ({
          ...prevData,
          logo: file,
          logoprev: reader.result, // Set logo preview
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    const requiredFields = ['name', 'description', 'type', 'logo', 'address', 'email', 'phone', 'website'];
    const isValid = requiredFields.every((field) => !!companyData[field]);

    if (!isValid) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(companyData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await AxiosClient.post('/admin/companies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      

      navigate(-1)
      // Reset form fields
      setCompanyData({
        name: '',
        description: '',
        type: '',
        logo: null,
        address: '',
        email: '',
        phone: '',
        website: '',
      }); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Company" />

      <div className="">
        <div className="flex flex-col ">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Add New Company</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Company Name</label>
                <input
                  type="text"
                  name="name"
                  value={companyData.name}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Company Type</label>
                <SelectCompanyType
                  selectedOption={companyData.type}
                  setSelectedOption={(value) =>
                    setCompanyData((prevData) => ({
                      ...prevData,
                      type: value,
                    }))
                  }
                  required
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Company Description</label>
                <textarea
                  name="description"
                  value={companyData.description}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Enter company description"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                ></textarea>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Logo</label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleLogoChange}
                  className="w-full"
                  accept="image/*"
                  required
                />
                {companyData.logoprev && (
                  <img
                    src={companyData.logoprev}
                    alt="Company Logo"
                    className="mt-2 w-32 h-32 object-cover"
                  />
                )}
              </div>

              {/* Address */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Address</label>
                <input
                  type="text"
                  name="address"
                  value={companyData.address}
                  onChange={handleChange}
                  placeholder="Enter company address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={companyData.email}
                  onChange={handleChange}
                  placeholder="Enter company email"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={companyData.phone}
                  onChange={handleChange}
                  placeholder="Enter company phone number"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Website */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Website</label>
                <input
                  type="url"
                  name="website"
                  value={companyData.website}
                  onChange={handleChange}
                  placeholder="Enter company website URL"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="m-4 flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Add Company
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompanyForm;
