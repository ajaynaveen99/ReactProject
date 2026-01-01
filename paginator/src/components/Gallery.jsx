import { useState } from 'react';
import sculptureList from '../data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  function handlePrev() {
    setIndex(index - 1);
  }
  function handlePage(indexValue){
    setIndex(indexValue);
  }

  let sculpture = sculptureList[index];
  return (
    <>
   

      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
      <br/>
         <button onClick={handlePrev}>
        prev
      </button>
    <button onClick={()=>handlePage(index)}>{index + 1}</button>
     <button onClick={()=>handlePage(index+1)}>{index + 2}</button>
      <button onClick={()=>handlePage(index+2)}>{index + 3}</button>
        <button onClick={handleClick}>
        Next
      </button>
          </>
  );
}
