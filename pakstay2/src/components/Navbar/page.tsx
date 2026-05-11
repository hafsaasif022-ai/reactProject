import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link to="/">🏨 PakStay</Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
      <ul className={open ? 'open' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login"><button className="sm-button">Login</button></Link></li>
        <li><Link to="/signup"><button className="sm-button border-button">Sign Up</button></Link></li>
      </ul>
    </nav>
  );
}