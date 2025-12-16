
import ResturantCard from "./ResturantCard.jsx";
import { useState } from "react";
import {restaurants} from "../data.js";

export default function Body() {


  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [filterList, setFilterlist] = useState(restaurants);
  //let [SearchedCard,setSearchdCard]=useState("");
  return (
    <>
      <input type="text" className="search-box" placeholder="search..." onChange={(event) => {
        console.log("searchcard", event.target.value)
        // SearchedCard=event.target.value;
        const SearchedCard = filterList.filter((obj) => obj.name.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log("SCard", SearchedCard)
        setListOfRestaurants(SearchedCard)
      }} />
      <button className="search-btn" onClick={() => {
        //for Button Click Search===////
        //const Card=filterList.filter((obj)=>obj.name.toLowerCase().includes(SearchedCard.toLowerCase()))
        // setListOfRestaurants(Card)
      }}>search</button>

      <button className="btn-filter" onClick={() => {
        const restra = (listOfRestaurants.filter(restro => restro.rating > 4.5))
        setListOfRestaurants(restra)
      }}
      >Above 4.5-Ratings</button>

      <div className="restroCard-list">
        {listOfRestaurants.map((restroCard,index) => (<ResturantCard  key={index} restro={restroCard} />))}
      </div></>
  );
}
