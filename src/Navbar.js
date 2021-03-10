import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Forky</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/plan">Planner</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;