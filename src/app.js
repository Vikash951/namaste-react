import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import { createBrowserRouter, Route, RouterProvider,Outlet } from "react-router-dom"; 
import About from "./components/About";  
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import Restaurantmenu from "./components/Restaurantmenu";









const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
              path:"/",
              element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/restaurant/:resId",
                element:<Restaurantmenu />
            }
        ],
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
   
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
















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