
//hw link: https://perscholas.instructure.com/courses/892/assignments/159495

import { useState, useEffect } from 'react';
import './App.css';
import StarshipCard from './components/StarshipCard';
import { fetchData } from './services/StarwarAPI.js'


function App() {
  const [starships, setStarships] = useState([])

  useEffect(async () =>{
    const data = await fetchData()
    setStarships(data)
  },[])
  
console.log(starships)

return (
  <div className="App">
    <header className='title'>STAR WARS</header>
  {starships.map((data, index) =>{
    return <StarshipCard data={data} key={index}/>
  })}
    
  </div>
);
}

export default App;
