import { useState } from 'react';
import data from "./data.js";
import Tour from './components/Tour'


function App() {
  const [tours,setTours]=useState(data);
  const [refresh,setRefresh]=useState(data);
  

 

  return (
    <>
    <main>
      <section>
        <div className="title"><h2>our tours</h2> </div>
        <div className="title-underline"></div>
        <div className="tours">
        {tours.map((tour,i)=><Tour key={i} tour={tour} tours={tours} setTours={setTours}/>)}
        </div>
      </section>
      
         {tours.length===0?<button className="refresh-btn" onClick={()=>
          setTours(refresh)
         }>Refresh</button> :""} 
    </main>
      
    </>
  )
}

export default App
