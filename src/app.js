import React from 'react';
import './app.css'
import  Vader from './assets/star-wars.jpg'
 function App() {
  return (
    <div className="container">
   <h2>Star</h2>
   <h1>Wars</h1>
   <img src={Vader}></img>
    </div>
  );
}
export default App;