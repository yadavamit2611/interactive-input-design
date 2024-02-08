import React, { useState } from 'react';
import './app.css';
import NumberScroll from './components/NumberScroll';
import SimpleNum from './components/SimpleNum';
import { Link } from 'react-router-dom';
function App() {
    return (
<div className=''>
  <div className="flex flex-col sm:flex-col md:flex-row w-full">
    <div className="text-center w-full text-xl p-3 md:w-1/2 sm:w-full">
      <SimpleNum />
    </div>
    <div className="text-center w-full text-xl p-3 md:w-1/2 sm:w-full">
      <NumberScroll/>
    </div>
  </div>
  <div className="flex justify-center my-8 space-x-5">
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Back to Instructions
            </button>
          </Link>
          <Link to="/submit">
            <button className="bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Submit
            </button>
          </Link>
    </div>
</div>

  )
}

export default App