import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './app.css'
import SimpleNum from './components/SimpleNum.jsx';
import NumberScroll from './components/NumberScroll.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Guidelines from './components/Guidelines.jsx';
import Result from './components/Result.jsx';

const AppLayout = () => {
  return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Guidelines />
      },
      {
        path: "/test",
        element: <SimpleNum />
      },
      {
          path: "/submit",
          element: <Result />   
      },
      {
        path: "/numScroll/:simElapsed",
        element: <NumberScroll />
      }
    ]
  },
  {
    path: "/simpleNum",
    element: <SimpleNum />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
