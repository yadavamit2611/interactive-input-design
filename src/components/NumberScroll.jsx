// NumberScroll.js
import React, { useState, useEffect } from 'react';
import './NumberScroll.css';
import { Link } from 'react-router-dom';

const NumberScroll = ({numValue , numMaxValue, title, nextTask, compare}) => {
  const totalElements = numMaxValue; // Updated total elements
  const [currentIndex, setCurrentIndex] = useState(numValue);
  const [hide, setHide] = useState(true);
  const [defaultValue, setdefaultValue] = useState(numValue);
  //  const {simElapsed} = useParams();

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

  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');
      const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const touchEndY = event.touches[0].clientY;
    const delta = Math.sign(touchStartY - touchEndY);
    setCurrentIndex((prevIndex) => Math.min(Math.max(prevIndex + delta, 1), totalElements));
  };

  const handleTouchEnd = () => {
    // Additional touch end logic if needed
  };

  let touchStartY = 0;

  scrollContainer.addEventListener('touchstart', handleTouchStart);
  scrollContainer.addEventListener('touchmove', handleTouchMove);
  scrollContainer.addEventListener('touchend', handleTouchEnd);

    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      setCurrentIndex((prevIndex) => Math.min(Math.max(prevIndex + delta, 1), totalElements));
    };

    const handleArrowKeys = (event) => {
      if (event.key === 'ArrowUp') {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 1));
      } else if (event.key === 'ArrowDown') {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalElements));
      }
    };

    scrollContainer.addEventListener('wheel', handleScroll);
    scrollContainer.addEventListener('keyup', handleArrowKeys);
    scrollContainer.addEventListener('keydown', handleArrowKeys);
    return () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
      scrollContainer.removeEventListener('keyup', handleArrowKeys);
      scrollContainer.removeEventListener('keydown', handleArrowKeys);      
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    setdefaultValue(currentIndex);
  }, [currentIndex]);

  const handleContainerDisplay = (mode) => {
    if(mode === 1){
      setHide(true);
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 1));
      setdefaultValue(currentIndex-1);
    }else if(mode === 2){
      setHide(true);
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalElements));
      setdefaultValue(currentIndex+1);    
    }else{
      setHide(true);
      setCurrentIndex(currentIndex);
      setdefaultValue(currentIndex);
    }
  }

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    if(e.target.value !== ''){
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 1 && value <= totalElements) {
        setdefaultValue(value);
        setCurrentIndex(value);
        setHide(false);
      }
    }else{
      // console.log('inside NaN', e.target.value);
      setdefaultValue(e.target.value);
      setCurrentIndex(e.target.value);
      setHide(true);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center bg-green-100 p-6 rounded-lg shadow-md'>
      <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4'> {`${title}`}</h1>
      <div className="p-2 flex flex-col justify-items-center">
      <label htmlFor="weightnumber" className="block text-white text-md bg-gray-800 p-2 rounded-t-md">
        Weight Input (kg)
      </label>
            <input
              type="number"
              id="defaultValue"
              name="defaultValue"
              value={defaultValue}
              max={500}
              onFocus={() => {if(currentIndex !== ''){setHide(false)}; startTimer()} }
              onWheel={(e) => e.target.blur()}
              onChange={handleInputChange}
              // readOnly={true}
              className='number-input border-2 text-lg p-2 w-full focus:outline-none focus:border-green-500'
            />
        <div id='scrollContainer' style={{ display: hide==false?"block":"none"}}>
        <div id='decNeighbour' className='box neighbour text-center' onClick={() => handleContainerDisplay(1)}>{currentIndex - 1} kg</div>
        <div id='currentNeighbour' className='box current text-center' onClick={() =>  handleContainerDisplay(0)}>{currentIndex} kg</div>
        <div id='incNeighbour' className='box neighbour text-center rounded-b-md' onClick={() =>  handleContainerDisplay(2)}>{currentIndex + 1} kg</div>
    </div>
    {startTime && (
          <p className="text-sm text-gray-500">Time Elapsed: {elapsedTime} seconds</p>
        )}
      </div>
      <div className='flex justify-center mx-auto bg-green-300 rounded-md mt-2'>
          <ul className='list-disc list-inside text-gray-700 p-2'>
            <li className='block'>You may use Scroll or Keypad</li>
          </ul>
        </div>
        { compare ? <div className="flex justify-center my-8" style={{display: defaultValue==66?"block":"none"}}>
          <Link to={nextTask}>
            <button onClick={() => {alert(`Elapsed time variant B : ${elapsedTime} seconds`)}} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Submit
            </button>
          </Link>
        </div> :       <div className="flex justify-center my-8" style={{display: defaultValue>=20?"block":"none"}}>
          <Link to={nextTask}>
            <button onClick={() => {alert(`Elapsed time variant B : ${elapsedTime} seconds`)}} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Submit
            </button>
          </Link>
        </div> }

    </div>
  );
};

export default NumberScroll;