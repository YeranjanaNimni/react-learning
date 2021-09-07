import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
            <h1>React Leaning Project</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/list" style={{
                    color:"white",
                    backgroundColor: "red",
                    borderRadius: "10px"
                }}>List </Link>
                <Link to="/use-effect" style={{
                    color:"white",
                    backgroundColor: "red",
                    borderRadius: "10px"
                }}>UseEffect </Link>
                <Link to="/input-form" style={{
                    color:"white",
                    backgroundColor: "red",
                    borderRadius: "10px"
                }}>Input Form </Link>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;