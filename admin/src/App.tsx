import { useEffect, useState } from 'react';
import { RouterProvider,  useLocation } from 'react-router-dom';
import routes from './hooks/routes';

import Loader from './common/Loader';
import { ContextProvider } from './hooks/contextProvider';


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
if (loading ) {
  return <Loader/>
}
  return (
   
    <ContextProvider>

    <RouterProvider router={routes}/>
    </ContextProvider>
  );
}

export default App;
