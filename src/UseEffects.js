import { useState, useEffect } from "react";

const UseEffects = () => {

 const [name, setName] = useState("Nimni");

  useEffect(()=>{
    console.log("use effect ran");
    console.log(name);
 }, [name])

    return ( <div>
        <button onClick={()=> setName("Yeranjana")}>Change name</button>
        {name}
    </div> );
}
 
export default UseEffects;