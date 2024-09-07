
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const Restaurantmenu = () =>{

    //const [resInfo , setResInfo] = useState(null)

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
   

    if(resInfo === null)return <Shimmer />

     const {costForTwoMessage ,  cuisines , name    } = resInfo?.data?.cards[2]?.card?.card?.info;

     const itemCards = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
       //console.log(itemCards);                      

    return (
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
           <p>{costForTwoMessage} - {cuisines.join(", ")}</p>
            
            <ul className="list">

                 { itemCards.map((item)=>(
                       <li key = {item?.card?.info?.id}>{item?.card?.info?.name}</li>
                  ))} 

                 

               
            </ul>
        </div>
    )
}

export default Restaurantmenu;