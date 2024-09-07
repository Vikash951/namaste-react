import IMAGE_CDN_URL from "../Utils/constant";
  

  const RestaurantCard = (props) => {

    const {resData} = props;

    

   

    return (
        <div className="res-card">
         
            
             <img className="res-card-image" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} /> 
            <h3>{resData.info.name}</h3>
             <h4>{resData.info.cuisines.join(", ")}</h4>
             <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} min</h4> 
            <h4>{resData.info.avgRating} Star</h4> 
            
        </div>
    )
}

export default RestaurantCard;
