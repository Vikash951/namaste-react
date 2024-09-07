 import React from "react";

 class UserClass extends React.Component{


    constructor(props){
        super(props);
        
        this.state = {
            count:0,
           
        }

        console.log("constructor");
    }


    componentDidMount(){
        console.log("user mount");
    }

    render(){
        return (
            <div>
                {console.log("render")}
                <h2>Name - vikash</h2>
                <h2>Location: Nahsik</h2>
                <h2>{this.props.name}</h2>
                <h2>{this.state.count}</h2>
                <button
                   onClick={ () => {
                     this.setState({
                        count:this.state.count+1,
                     })
                   }}  
                >Count Inc</button>
            </div>
        )
    }
 }

 export default UserClass;