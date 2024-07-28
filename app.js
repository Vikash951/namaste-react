// const heading = React.createElement("h1" , {id:"heading"} , "Namaste Vikash");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



{/* <div id = "parent">
    <div id="children">
        <h1></h1>
    </div>
</div> */}

const parent = React.createElement("div" , {id:"parent"} , 
                                                  [React.createElement("div" ,
                                                              {id:"children1"} , 
                                                              [React.createElement("h1" , {id:"h11"} , "h1 tag") ,
                                                               React.createElement("h2" , {id:"h21"} , "h2 tag")]) ,
                                                   React.createElement("div" , {id:"children2"} , [React.createElement("h1" , {id:"h12"} , "h1 tag") , React.createElement("h2" , {id:"h22"} , "h2 tag")])]
                                                   );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)