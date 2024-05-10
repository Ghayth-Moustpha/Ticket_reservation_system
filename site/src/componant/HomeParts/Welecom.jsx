import React from 'react';
import { Link } from "react-router-dom";
const Welcome = () => {
  

  return (
    <section className="bg-sky-900 py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to TotalTicket SPU</h1>
          <p className="text-xl text-white">The easiest way to book tickets for your favorite events</p>
          <Link to="/TransportationSelection" className="bg-blue-300 text-white py-1 px-4 rounded mt-8">
  Start Booking
</Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;