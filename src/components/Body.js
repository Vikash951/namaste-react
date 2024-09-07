import RestaurantCard from "./RestaurantCard";

import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../Utils/useOnlineStatus";



const Body = () =>{
   

    const [listOfRestaurant , setListOfRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    
    const onlineStatus = useOnlineStatus();

    console.log(onlineStatus);

    if(onlineStatus === false){
      return <p>You are offline please check your internet connection</p>
    }

    const handleSearchClick = () => {

      const filteredRestaurant = listOfRestaurant.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
      })


      setFilteredRestaurant(filteredRestaurant);
    }

    useEffect(() => {
        fetchData();
    } , [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560");
      const json = await data.json();

      const finalData = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

      console.log(finalData);
      

      setListOfRestaurant(finalData);
      setFilteredRestaurant(finalData);
      
    }




   

    

    return  listOfRestaurant.length === 0 ? <Shimmer /> : (
      <div className="body">

         <div className="filter">

            <div className="search">
               <input type="text" 
                  className="search-box" 
                  value = {searchText} 
                  onChange={(e) => {
                    setSearchText(e.target.value)
                    
                  }}
                />
               <button
                  className="search-btn"
                  onClick={ () => {
                    //Filter the restaurant and update the UI
                    handleSearchClick();
                  }}
               >Search</button>
            </div>

            <button
                className="top-rated-button"
                  onClick={() => {
                    //filter logic
                    const topRated = listOfRestaurant.filter(
                        (restaurant) => restaurant.info.avgRating > 4
                    );
                    setListOfRestaurant(topRated);

                  }}
                > 
                  Top Rated Restaurants
                </button>
         </div>
        
         <div className="res-container">
              
               {filteredRestaurant.map((restaurant) =>(
                <Link key = {restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData = {restaurant} /></Link> 
               ))}
               
         </div>
      </div>
      
    )
      
}

export default Body;

