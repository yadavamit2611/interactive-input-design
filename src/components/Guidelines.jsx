import React from 'react';
import { Link } from 'react-router-dom';

function Guidelines() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-2">
      <div className="mx-auto p-6 bg-white drop-shadow-2xl rounded-lg sm:w-auto lg:w-1/2">
        <h1 className="text-3xl font-semibold text-center mb-6">Test Guidelines</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Test Description:</h2>
          <p className="text-gray-700">
            This test evaluates the performance as well as overall user experience using two types of number inputs.
            You will be provided with guidelines for the tasks and parameters to follow.
            Please read the instructions carefully before proceeding.
          </p>
        </div>
        <div className="mb-8 bg-blue-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2 p-2">Test Instructions:</h2>
          <ul className="list-disc list-inside text-gray-700 p-2">
            <li>Task 1 and 2: Use the simple number input to perform the given task.</li>
            <li>Task 3 and 4: Use the proposed input method to perform the given task.</li>
            <li>Note the time taken and accuracy for each task.</li>
            <li> After completing all the tasks you may take screenshot of the result for your reference (useful for filling the questionnaire)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Post Hoc Test Guidelines (NASA-TLX):</h2>
          <p className="text-gray-700">
            After completing the tasks, you will be asked to fill out the NASA Task Load Index (NASA-TLX) questionnaire.
            This will help evaluate the perceived workload during the test.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/test">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Start Task 1
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Guidelines;