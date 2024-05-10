import React, { useState } from 'react';

const BusBookingPage = () => {
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleDestinationClick = () => {
    setShowDestinationOptions(!showDestinationOptions);
  };

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setShowDestinationOptions(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-custom-background">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Bus Booking Form</h2>

        {/* مكان الانطلاق */}
        <label htmlFor="departure">Departure:</label>
        <select id="departure" className="block w-full border border-gray-300 rounded p-2 mb-4"></select>

        {/* الوجهة */}
        <label htmlFor="destination">Destination:</label>
        <div className="relative">
          <input
            type="text"
            id="destination"
            className="block w-full border border-gray-300 rounded p-2 mb-4 cursor-pointer"
            onClick={handleDestinationClick}
            value={selectedDestination}
            readOnly
          />
          {showDestinationOptions && (
            <ul className="absolute top-10 left-0 right-0 bg-white border border-gray-300 rounded p-2">
              <li onClick={() => handleDestinationSelect('Damascuss')}> Damascuss</li>
              <li onClick={() => handleDestinationSelect('Daraa')}>Daraa</li>
              <li onClick={() => handleDestinationSelect('Aleppo')}>Aleppo</li>
              <li onClick={() => handleDestinationSelect('Swieda')}>Swieda</li>
              <li onClick={() => handleDestinationSelect('Homs')}>Homs</li>
              <li onClick={() => handleDestinationSelect('Latakia')}>Latakia</li>
              <li onClick={() => handleDestinationSelect('Hama')}>Hama</li>
              <li onClick={() => handleDestinationSelect('Dier Azzor')}>Dier Azzor</li>
            </ul>
          )}
        </div>

        {/* عدد الأشخاص */}
        <label htmlFor="passengers">Number of Passengers:</label>
        <input type="number" id="passengers" className="block w-full border border-gray-300 rounded p-2 mb-4" />

        {/* موعد انطلاق الرحلة */}
        <label htmlFor="departureDate">Departure Date:</label>
        <input type="date" id="departureDate" className="block w-full border border-gray-300 rounded p-2 mb-4" />

        {/* شركات الحافلات المتاحة */}
        <label htmlFor="busCompanies">Bus Companies:</label>
        <select id="busCompanies" className="block w-full border border-gray-300 rounded p-2 mb-4"></select>

        {/* اجمالي سعر التذكرة */}
        <p>Total Ticket Price: $100</p>

        {/* اختيار الكرسي */}
        <label htmlFor="seatNumber">Select Seat Number:</label>
        <input type="text" id="seatNumber" className="block w-full border border-gray-300 rounded p-2 mb-4" />

        <button className="bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
      </div>
    </div>
  );
};

export default BusBookingPage;