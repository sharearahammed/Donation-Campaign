import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Donation from '../Donation/Donation';
import Statistics from '../Statistics/Statistics';
import ErrorPage from '../ErrorPage/ErrorPage';
import DonationDetails from '../DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>
      },
    ]
  },
]);

export default router;