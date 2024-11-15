import { useState } from 'react'

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
      const [selectedButton, setSelectedButton]=useState('');
      
      function ButtonHandler(pressedButton){
          setSelectedButton(pressedButton);
      }
    let localContext = <button onClick = {()=>ButtonHandler("Delete")}>Delete</button>;
    
    if(selectedButton == "Proceed"){
        localContext = <button onClick = {()=>ButtonHandler("Delete")}>Delete</button>;
    }
    if(selectedButton == "Delete"){
        localContext =
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {()=>ButtonHandler('Proceed')}>Proceed</button>
        </div>;
    }
    return (
      <div>
        {localContext}
      </div>    
    );
}
