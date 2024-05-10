import { createBrowserRouter } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SignIn from '../pages/Authentication/SignIn';
import Calendar from '../pages/Calendar';
import Chart from '../pages/Chart';
import ECommerce from '../pages/Dashboard/ECommerce';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Tables from '../pages/Tables';
import Alerts from '../pages/UiElements/Alerts';
import Buttons from '../pages/UiElements/Buttons';
import GuestLayout from '../layout/GuestLayout';
import DefaultLayout from '../layout/DefaultLayout';
import Copmanies from '../pages/Companys/copmanies';
import AddCompany from '../pages/Companys/AddCompany';
import Coordinators from '../pages/Coordinators/Coordinators';
import AddCoordinators from '../pages/Coordinators/AddCoordinators';
import Stations from '../pages/Stations/Stations';
import AddStations from '../pages/Stations/AddStations';

const routes = createBrowserRouter([
  {
    path:"/",
    element :<DefaultLayout /> ,
  children:[ 
  { 
    index: true,
    element: (
      <>
        <PageTitle title="Dashboard " />
        <ECommerce />
      </>
    )
  },
  { 
    path: '/companies',
    element: (
      <>
        <PageTitle title="Companies" />
        <Copmanies />
      </>
    )
  },
  { 
    path: '/companies/add',
    element: (
      <>
        <PageTitle title=" Add Company" />
        <AddCompany />
      </>
    )
  },
  { 
    path: '/coordinators',
    element: (
      <>
        <PageTitle title="Coordinators" />
        <Coordinators  />
      </>
    )
  },
  { 
    path: '/coordinators/add',
    element: (
      <>
        <PageTitle title=" Add Coordinators" />
        <AddCoordinators />
      </>
    )
  },
  ,
  { 
    path: '/stations',
    element: (
      <>
        <PageTitle title="stations" />
        <Stations  />
      </>
    )
  },
  { 
    path: '/stations/add',
    element: (
      <>
        <PageTitle title=" Add Coordinators" />
        <AddStations />
      </>
    )
  },
  { 
    path: '/calendar',
    element: (
      <>
        <PageTitle title="Calendar " />
        <Calendar />
      </>
    )
  },
  { 
    path: '/profile',
    element: (
      <>
        <PageTitle title="Profile " />
        <Profile />
      </>
    )
  },
  { 
    path: '/forms/form-elements',
    element: (
      <>
        <PageTitle title="Form Elements " />
        <FormElements />
      </>
    )
  },
  { 
    path: '/forms/form-layout',
    element: (
      <>
        <PageTitle title="Form Layout " />
        <FormLayout />
      </>
    )
  },
  { 
    path: '/tables',
    element: (
      <>
        <PageTitle title="Tables " />
        <Tables />
      </>
    )
  },
  { 
    path: '/settings',
    element: (
      <>
        <PageTitle title="Settings " />
        <Settings />
      </>
    )
  },
  { 
    path: '/chart',
    element: (
      <>
        <PageTitle title="Basic Chart " />
        <Chart />
      </>
    )
  },
  { 
    path: '/ui/alerts',
    element: (
      <>
        <PageTitle title="Alerts " />
        <Alerts />
      </>
    )
  },
  { 
    path: '/ui/buttons',
    element: (
      <>
        <PageTitle title="Buttons " />
        <Buttons />
      </>
    )
  },]} ,
    {
      path:"/" , 
      element: <GuestLayout />, 
      children:[ 
        { 
          path: '/login',
          element: (
            <>
              <PageTitle title="login " />
              <SignIn />
            </>
          )
        } ,]
       
      },
    
]);

export default routes;
