import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
return(
<nav className="nav">
 <Link className="home" to="/Homepage">Home</Link>
 <ul>
    <li>
        <Link className="link"  to="/Slider">Slider</Link>
    </li>
    <li>
        <Link className="link" to="/">Login</Link>
    </li>
    <li>
    <Link className="link" to="/Chart">Chart</Link>
    </li>
 </ul>
</nav>
);
}

export default Navbar