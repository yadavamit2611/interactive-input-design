import React, {useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import TimeContext from '../utility/TimeContext';

const Result = () => {
  const {showForm} = useParams();
  const {tasks, setTasks} = useContext(TimeContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto p-6 bg-white drop-shadow-2xl rounded-lg text-center sm:w-auto lg:w-1/2 md:w-2/5">
        {
          showForm === 'true' ? 
          <div>
              <h1 className="text-3xl font-semibold mb-4">Thank You for Participating!</h1>
              <p className="text-gray-700 mb-6">
                We appreciate your participation in the test. 
                <br />
                Please take a screenshot of the time invested in the tasks which will be useful to fill in the questionnaire by clicking the link below:
              </p>
              <ul className='list-disc list-inside text-gray-700 p-2 mb-4'>
                {Object.entries(tasks).map(([key, value]) => (
                  <li key={key}>
                    {value}
                  </li>
                ))}
            </ul>
              <Link to="https://forms.gle/v4F4PsLKgGA5G5KJ9" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Fill Questionnaire
            </Link>
            </div> : <p className='text-gray-700 mb-6'>Please complete the task first</p>
        }
      </div>
    </div>
  );
}

export default Result;
