import './App.css'
import React, { useState } from 'react'

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');


  // Logic for calculating BMI

  const calculateBmi = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      alert("Please enter a valid weight and height");
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));
      if (bmiValue < 18.5) {
        setBmiMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiMessage("You are normal weight");
      } else {
        setBmiMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    setBmi('');
    setBmiMessage('');
    setWeight('');
    setHeight('');
  };

  return (
    <div className="bg-blue-500 text-white p-5 my-5 mx-auto min-h-[80vh] rounded-xl w-1/2">
      <div className='container'>
        <h2 className='text-center font-bold bg-blue-900 p-5 text-3xl '>BMI Calculator</h2>

        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (lbs):</label>
            <input type="number" className=' bg-white text-black rounded-2xl  m-2  p-5' placeholder='Enter weight in lbs' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in):</label>
            <input type="number" className=' bg-white text-black rounded-2xl m-2  p-5' placeholder='Enter height in inches' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='flex justify-center'>
            <div className='m-2 p-5 '>
              <button className=' bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ' type='submit' >Submit</button>
            </div>
            <div className='m-2 p-5'>
              <button className='bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded' type='button' onClick={reload}>Reload</button>
            </div>
          </div>

          <div className='text-center font-semibold '>
            <h3>Your BMI is: {bmi}</h3>
            <p>{bmiMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
