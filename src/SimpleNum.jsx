import React, { useState } from 'react';
import './NumberScroll.css';

const SimpleNum = () => {
    const [normalNumber, setNormalNumber] = useState(1);
  return (
<div className='flex flex-col justify-center items-center bg-purple-100 p-6 rounded-lg shadow-md'>
  <h1 className='font-mono text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4'>
    Standard Number Input aka Variant A
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
      max={500}
      min={1}
    />
  </div>
</div>
    
  )
}

export default SimpleNum