import React, { useState } from 'react';
import './app.css';
import NumberScroll from './NumberScroll';
/* import NumberPlusMinus from './NumberPlusMinus'; */
import SimpleNum from './SimpleNum';
function App() {
    return (
<div className=''>
  <div className='text-center text-2xl m-10 delay-75 text-teal-800 font-bold font-mono'>
    Interative Systems Project
  </div>

  <div className="flex flex-col sm:flex-col md:flex-row w-full">
    <div className="text-center w-full text-xl p-3 md:w-1/2 sm:w-full">
      <SimpleNum />
    </div>
    <div className="text-center w-full text-xl p-3 md:w-1/2 sm:w-full">
      <NumberScroll />
    </div>
  </div>

  <div className='text-center text-sm m-10 delay-75 text-teal-900 font-mono'>
    By Amit Yadav & Shraddha Gujarmale (MACS - HSM)
  </div>
</div>

  )
}

export default App