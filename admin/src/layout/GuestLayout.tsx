import React, {  ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../hooks/contextProvider';

const GuestLayout: React.FC = () => {
    const {token} = useStateContext () ; 

    if (token) {
     return <Navigate to="/" />
      }
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
             <Outlet/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;


