import React, { useEffect, useState } from 'react';
import './NumberScroll.css';
import { Link } from 'react-router-dom';

const SimpleNum = () => {
  const [normalNumber, setNormalNumber] = useState(1);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsed = Math.floor((currentTime - startTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [startTime]);

  const startTimer = () => {
    if (!startTime) {
      setStartTime(new Date().getTime());
    }
  };

  return (
    <div className='flex flex-col justify-center items-center bg-purple-100 p-6 rounded-lg shadow-md'>
      <h1 className='font-mono text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4'>
        Task 1 : Enter your weight with variant A
      </h1>
      <div className='p-2 flex flex-col justify-items-center'>
        <label htmlFor="weightnumber" className="block text-white text-md bg-gray-800 p-2 rounded-t-md">
          Weight Input (kg)
        </label>
        <input
          type='number'
          name='weightnumber'
          className='number-input border-2 text-lg p-2 rounded-b-md focus:outline-none focus:border-purple-500'
          onChange={(e) => setNormalNumber(e.target.value)}
          value={normalNumber}
          onFocus={startTimer}
          max={500}
          min={1}
        />
        {startTime && (
          <p className="text-sm text-gray-500">Time Elapsed: {elapsedTime} seconds</p>
        )}
        <div className="flex justify-center text-center my-8" style={{display: normalNumber>=20?"block":"none"}} >
          <Link to={`/numScroll/${elapsedTime}`}>
            <button onClick={() => console.log(`elapsed time variant A : ${elapsedTime}`)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Next Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleNum;
