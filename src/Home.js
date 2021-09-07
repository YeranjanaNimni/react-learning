import { useState } from 'react';


const Home = () => {

    // let name = "Nimni";
    const [name, setName] = useState("Nimni")

    const handleClick = ()=>{
        setName("Yeranjana")
    }

    // const handleClickAgain = (name)=>{
    //     // alert("Hi")
    //     console.log("Hi " + name)
    // }

    return ( 
        <div className="home">
            <h2> How to use "useState"</h2> 

            <div>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={ ()=>handleClickAgain("Nimni")}>Click me again</button>
            <button onClick={ ()=>{alert("Hi")}}>Click me again</button> */}
            </div>
        </div>
     );
}
 
export default Home;