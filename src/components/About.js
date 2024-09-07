import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
   
   constructor(){
       super();
       console.log("constructor about")
   }

   componentDidMount(){
    console.log("mount about");
   }

    render(){
        return (
            <div> 
                 
                 <User name = {"vikash"} location = {"Rath"}/>
                 <UserClass name = {"I am a class component"}/>
                 <UserClass name = {"I am a class component"}/>
                 {console.log("render about")}
                 <h1>Hello, I am about</h1>
            </div>
               
        ) 
    }
}

// const About = () =>{
          
// }

export default About;