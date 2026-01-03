import { useState } from 'react';
import sculptureList from '../data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   function handlePrev() {
//     setIndex(index - 1);
//   }
//   function handlePage(indexValue){
//     setIndex(indexValue);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//       <br/>
//          <button onClick={handlePrev}>
//         prev
//       </button>
//     <button onClick={()=>handlePage(index)}>{index + 1}</button>
//      <button onClick={()=>handlePage(index+1)}>{index + 2}</button>
//       <button onClick={()=>handlePage(index+2)}>{index + 3}</button>
//         <button onClick={handleClick}>
//         Next
//       </button>
//           </>
//   );
// }
function Item({name,artist,img,descript}){
  return (<>
  <h1>{name}</h1>
  <p>{artist}</p>
  <img src={img} alt="" />
  <p>{descript}</p>
  </>)
}
export default function Gallery(){

const [currentPage,setCurrentPage]=useState(1);
const NumberOfItems=2;
const totalItems=sculptureList.length;
console.log(totalItems)
const  totalPages=Math.ceil(totalItems/NumberOfItems) //13/2=6.15=7
console.log(totalPages)
const start=(currentPage-1)*NumberOfItems;//
const end=currentPage*NumberOfItems;
console.log(start,end)

function handleClick(n){
  setCurrentPage(n)
}
return (<>
{[...Array(totalPages).keys()].map((n)=><button onClick={()=>handleClick(n+1)}>{n+1}</button>)}
<div>{sculptureList.slice(start,end).map((sculpture)=><Item name={sculpture.name} artist={sculpture.artist} img={sculpture.url} descript={sculpture.description}  />)}</div></>)

}
