
import ResturantCard from "./ResturantCard.jsx";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import {restaurants} from "../data.js";

export default function Body() {


  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterList, setFilterlist] = useState([]);
  //let [SearchedCard,setSearchdCard]=useState("");
useEffect(() => {
    FetchData();
  },[]);
   async function FetchData() {
    const data = await fetch("http://localhost:3000/dataOfRestraunt");
    const json = await data.json();
    console.log("fetched data", json);

    setListOfRestaurants(json?.data?.cards);
    setFilterlist(json?.data?.cards);
    
  
   }
   if(listOfRestaurants.length==0){
    return <h1>Loading....</h1>
   }
   
   
       console.log("json", listOfRestaurants);

  return (
    <>
      <input type="text" className="search-box" placeholder="search..." onChange={(event) => {
        console.log("searchcard", event.target.value)
        // SearchedCard=event.target.value;
        const SearchedCard = filterList.filter((obj,index) => {
          console.log("obj",obj)
          
           return obj.card.card.info?obj.card.card.info.name.toLowerCase().includes(event.target.value.toLowerCase()):null})
        console.log("SCard", SearchedCard)
        setListOfRestaurants(SearchedCard)
      }} />
      <button className="search-btn" onClick={() => {
        //for Button Click Search===////
        //const Card=filterList.filter((obj)=>obj.name.toLowerCase().includes(SearchedCard.toLowerCase()))
        // setListOfRestaurants(Card)
      }}>search</button>

      <button className="btn-filter" onClick={() => {
        const restra = (listOfRestaurants.filter(restro => {
          return restro.card.card.info?restro.card.card.info.avgRating > 4.5:false}))
        setListOfRestaurants(restra)
      }}
      >Above 4.5-Ratings</button>

      <div className="restroCard-list">
        {listOfRestaurants.map((restroCard,index) => {
          return restroCard.card.card.info?
         <Link to={`/restaurant/${restroCard.card.card.info.id}`}>
  <ResturantCard restro={restroCard} />
</Link> :null})}
      </div></>
  );
}
