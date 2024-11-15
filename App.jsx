import { useState } from 'react'

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
