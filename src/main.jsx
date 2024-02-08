import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';
import Error from './components/Error.jsx';
import TimeContext from './utility/TimeContext';


const AppLayout = () => {
  const [tasks, setTasks] = useState({
    task1: "elapsed time for task 1 : incomplete",
    task2: "elapsed time for task 3 : incomplete",
    task3: "elapsed time for task 3 : incomplete",
    task4: "elapsed time for task 4 : incomplete"    
  })
  return (
          <TimeContext.Provider value={{tasks: tasks, setTasks: setTasks}}>
          <Header />
          {/* outlet will be filled by children */}
          <Outlet />
          <Footer />
          </TimeContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Guidelines />
      },
      {
        path: "/test",
        element: <SimpleNum key={1} task={`Task1`} numValue={1} numMaxValue={500} title={'Task 1: Enter weight with Variant A'} nextTask={`/test2`} compare={false}/>
      },
      {
        path: "/test2",
        element: <SimpleNum key={2} task={`Task2`} numValue={1} numMaxValue={100} title={'Task 2: Enter 87 out of 100 with Variant A'} nextTask={`/numScroll`} compare={true}/>
      },
      {
        path: "/numScroll",
        element: <NumberScroll key={3} task={`Task3`} numValue={1} numMaxValue={499} title={'Task 3: Enter weight with Variant B'} nextTask={`/markScroll`} compare={false}/>
      },
      {
        path: "/markScroll",
        element: <NumberScroll key={4} task={`Task4`} numValue={1} numMaxValue={99} title={'Task 4: Enter Marks 66 out of 100 with Variant B'} nextTask={`/submit/${true}`} compare={true}/>        
      },
      {
          path: "/submit/:showForm",
          element: <Result />   
      },    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
