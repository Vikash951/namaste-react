import React from "react";
import ReactDOM from "react-dom/client";

const resObj =  {
    "id": "24002",
    "name": "Amul Restaurant",
    "cloudinaryImageId": "dwa7qtycvyioxnswru3l",
    "locality": "Wakad",
    "areaName": "Wakad",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian"
    ],
    "avgRating": 4.3,
    "parentId": "32574",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "promoted": true,
    "adTrackingId": "cid=16003873~p=0~adgrpid=16003873#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=24002~eid=afc49e1f-dd17-4ff3-9ac2-edef2c7a5d94~srvts=1722669384773~collid=45995",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-03 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            }
          ]
        },
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹70"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "3.9",
        "ratingCount": "1K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  }
  



const Header = () =>{
    return (
        <div className="header">
           <div className="logo-container">
                 <img className="logo" src="https://img.icons8.com/?size=100&id=KlYr6CtXsiQx&format=png&color=000000" alt="" />
           </div>
           <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
           </div>
            
        </div>
    )
}

const RestaurantCard = (props) => {

    const {resData} = props;

    console.log(resData.name);

    return (
        <div className="res-card">
            {/* <img className="res-card-image" src= {image_address} alt="" /> */}
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.sla.deliveryTime} min</h4> 
            <h4>{resData.avgRating}</h4>
            
        </div>
    )
}

const Body = () =>{
  return (
    <div className="body">
       <div className="search">
           Search
       </div>
       <div className="res-container">
             <RestaurantCard resData = {resObj}/>
             
             
       </div>
    </div>
    
  )
    
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
















// const heading = React.createElement("h1" , {id:"heading"} , "Namaste React🚀");

// const jsx_heading = <h1 id="heading" className="head">Namaste React in jsx 🚀</h1>

// const Title = () => {
//     return (
//         <h1 className="head">
//             Namaste React using JSX
//         </h1>
//     )
// }


// const number = 10000;

// const HeadingComponent = () => {
//     return ( <div>
//         <Title />
//         <h2>{number}</h2>
//         {jsx_heading}
//         <h1>Namaste React functional component</h1>
//     </div>)
// };

//const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsx_heading);

//root.render(<HeadingComponent /> );




























































// const heading = React.createElement("h1" , {id:"heading"} , "Namaste Vikash");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



{/* <div id = "parent">
    <div id="children">
        <h1></h1>
    </div>
</div> */}

// const parent = React.createElement("div" , {id:"parent"} , 
//                                                   [React.createElement("div" ,
//                                                               {id:"children1"} , 
//                                                               [React.createElement("h1" , {id:"h11"} , "h1 tag") ,
//                                                                React.createElement("h2" , {id:"h21"} , "h2 tag")]) ,
//                                                    React.createElement("div" , {id:"children2"} , [React.createElement("h1" , {id:"h12"} , "h1 tag") , React.createElement("h2" , {id:"h22"} , "h2 tag")])]
//                                                    );

//console.log(parent);                                                   

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)