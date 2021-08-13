import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./sidebar.css"

export default function Sidebar(){
    return(
        <div className="sidebar-main">
            <Link className = "links-sidebar">Home</Link>
            <Link className = "links-sidebar">Settings</Link>
            <Link className = "links-sidebar">Profile</Link>
            <Link className = "links-sidebar">Courses</Link>
            <Link className = "links-sidebar"> Study</Link>
        </div>
    )
}