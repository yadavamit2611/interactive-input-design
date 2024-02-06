import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg text-center w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Thank You for Participating!</h1>
        <p className="text-gray-700 mb-6">
          We appreciate your participation in the test. 
          <br />
          {/* Please take a moment to fill in the NASA Task Load Index (NASA-TLX) questionnaire by clicking the link below: */}
        </p>
        {/* <Link to="/nasa-tlx" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Fill NASA-TLX Questionnaire
        </Link> */}
      </div>
    </div>
  );
}

export default Result;
