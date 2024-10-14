import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
            <li>
                <Link className="link" to="/Content1">Grade 1 Content</Link>
            </li>
            <li>
                <Link className="link" to="/Content2">Grade 2 Content</Link>
            </li>
            <li>
                <Link className="link" to="/Content3">Grade 3 Content</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;