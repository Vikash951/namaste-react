import { useRouteError } from "react-router-dom";

const Error = () =>{
    
    const err = useRouteError();

    console.log(err);

     return (
        <div className="error-page">
            <h1>Ooops</h1>
            <h1>Something Went Wrong</h1>
            <h2>{err.status}</h2>
        </div>
     )
}

export default Error;