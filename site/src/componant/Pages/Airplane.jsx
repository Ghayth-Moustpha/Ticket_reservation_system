import React, { useState } from 'react';

const  Airplane = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [reservedWeight, setReservedWeight] = useState('');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const companies = [
    {
      name: 'Cham Wings',
      description: 'Cham Wings Airlines is a Syrian private airline based in Damascus.',
      price: '$200',
    },
    {
      name: 'Cham Airlines',
      description: 'Cham Airlines is a Vietnamese airline based in Ho Chi Minh City.',
      price: '$180',
    },
    {
      name: 'Asfar',
      description: 'Asfar Airlines is a fictional airline.',
      price: '$220',
    },
    {
      name: 'Saudi Arabian Airlines',
      description: 'Saudi Arabian Airlines is the national carrier airline of Saudi Arabia.',
      price: '$250',
    },
    {
      name: 'Travel',
      description: 'Travel Airlines provides domestic and international flights.',
      price: '$190',
    },
    {
      name: 'Emirates Airlines',
      description: 'Emirates Airlines is a major airline based in Dubai, United Arab Emirates.',
      price: '$300',
    },
    {
      name: 'Queen Alia',
      description: 'Queen Alia is the national airline of Jordan.',
      price: '$230',
    },
  ];

  const handleCompanySelection = (company) => {
    setSelectedCompany(company);
  };

  const handleReservedWeightChange = (event) => {
    setReservedWeight(event.target.value);
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Selected Company:', selectedCompany);
    console.log('Reserved Weight:', reservedWeight);
    console.log('Selected Seat:', selectedSeat);
  };

  return (
    <div className="flex justify-center">
      {/* Animated banner */}
      <div className="relative w-full h-64">
        <img
          src="/images/hero.gif"
          alt="Banner"
          className="w-full h-full object-cover"
        />
 <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <label className="text-xl font-bold" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-300 px-4 py-2 rounded"
              required
            />
            <label className="text-xl font-bold" htmlFor="departure">
              Departure:
            </label>
            <input
              type="text"
              id="departure"
              className="border border-gray-300 px-4 py-2 rounded"
              required
            />
            <label className="text-xl font-bold" htmlFor="destination">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              className="border bordergray-300 px-4 py-2 rounded"
              required
            />
            <label className="text-xl font-bold" htmlFor="class">
              Class:
            </label>
            <select
              id="class"
              className="border border-gray-300 px-4 py-2 rounded"
              required
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            <label className="text-xl font-bold" htmlFor="reservationType">
              Reservation Type:
            </label>
            <select
              id="reservationType"
              className="border border-gray-300 px-4 py-2 rounded"
              required
            >
              <option value="adults">Adults Only</option>
              <option value="family">Family with Children</option>
            </select>
            <label className="text-xl font-bold" htmlFor="weight">
              Weight (up to 20 kg):
            </label>
            <input
              type="number"
              id="weight"
              className="border border-gray-300 px-4 py-2 rounded"
              min="0"
              max="20"
              value={reservedWeight}
              onChange={handleReservedWeightChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              disabled={!selectedCompany || !reservedWeight || !selectedSeat}
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-500 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Book Your Airline Ticket</h1>
        </div>
      </div>
      <div className="w-1/2 p-8">
        {/* Aviation model */}
        <div className="bg-gray-200 rounded p-5 text-center">
          <h2 className="text-2x1 font-bold mb-4">Seat Selection</h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Replace with your aviation model */}
            <button
              className={`h-12 w-12 rounded border ${
                selectedSeat === '1A' ? 'bg-blue-100' : 'bg-white'
              }`}
              onClick={() => handleSeatSelection('1A')}
            >
              1A
              
            </button>
            <div className="grid grid-cols-4 gap-4">
            {/* Replace with your aviation model */}
            <button
              className={`h-12 w-12 rounded border ${
                selectedSeat === '1A' ? 'bg-blue-100' : 'bg-white'
              }`}
              onClick={() => handleSeatSelection('1A')}
            >
              2A
              
            </button>
            </div>

            {/* ... more seat buttons */}
          </div>
        </div>
      </div>
     
      <div className="w-1/4 p-8">
        <h2 className="text-2xl font-bold mb-4">Select Airline Company</h2>
        <div className="flex flex-col space-y-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`border border-gray-300 rounded p-4 cursor-pointer ${
                selectedCompany === company ? 'bg-blue-100' : ''
              }`}
              onClick={() => handleCompanySelection(company)}
            >
              <h3 className="text-xl font-bold">{company.name}</h3>
              <p className="text-gray-600">{company.description}</p>
              <p className="text-green-600 font-bold">{company.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  Airplane;