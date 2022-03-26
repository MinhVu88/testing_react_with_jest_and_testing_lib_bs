import React, { useState } from "react";

export function replaceCamelWithSpaces(color) {
  return color.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  // const [btnColor, setBtnColor] = useState('red');
  const [btnColor, setBtnColor] = useState('MediumVioletRed');
  const [isDisabled, setIsDisabled] = useState(false);

  // const newBtnColor = btnColor === 'red' ? 'blue' : 'red';
  const newBtnColor = btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '200px auto'
      }}
    >
      <h1>Testing React with Jest & testing lib | Bonnie Schulkin | App 1: Color Button</h1>
      <button
        style={{
          backgroundColor: !isDisabled ? btnColor : 'gray',
          cursor: 'pointer',
          width: '120px',
          height: '50px',
          marginBottom: '20px'
        }}
        disabled={isDisabled}
        onClick={() => setBtnColor(newBtnColor)}
      >
        Change to {newBtnColor}
      </button>
      <input 
        type="checkbox" 
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        onChange={e => setIsDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
