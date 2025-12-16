import { useState } from 'react'
import './App.css'
import data from './data.ts';
import People from './components/People';




function App() {

  const [peoples, setPeople] = useState(data);
  const [person,setPersons]=useState(data)

  function handleClick(){

  setPeople([])
}
function handleShow(){
  setPeople(person)
}

  return (
   <>
   <div className="people-card">
   
    <div className="container">
       <h3>{peoples.length} birthdays today</h3>
  
      {peoples.map((people,i)=> <People key={i} people={people}/>)}

      {peoples.length==0?<button type="button" className="btn btn-block" onClick={handleShow}>Show all</button>:<button type="button" className="btn btn-block" onClick={handleClick}>clear all</button>}

    </div>
   </div>
   </>
  )
}

export default App
