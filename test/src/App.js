// import { render } from '@testing-library/react';
import {useState} from 'react'
import './App.css';


function App() {
const [formInfo, setFormInfo]=useState({ ratings:'', 

})
const [star, setstar]=useState([])
const handleChange =(e)=>{
  setFormInfo({...formInfo, [e.target.ratings]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault()
  setstar([...star, formInfo])
}
return (
  
    
    <div className="App">
      <h1>Enter A Number to see your rating...</h1>
<div className="rsvp">
<form onSubmit={handleSubmit}>
  
    <input type="number" onChange={handleChange}
    ratings="ratings" placeholder="ratings" 
    value={formInfo.ratings}></input>
   

<button type='submit'>
  Submit
</button>
</form>
</div>
<div>
<ol>{star.map(starRating=>{
return(
  <li>
    <p>{starRating.ratings}</p>
    
  </li>

)
})}</ol>
</div>
    </div>
    
  );
}

export default App;
