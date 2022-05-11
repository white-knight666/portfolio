import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div className="center">
    <nav>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/About">About</Link></li>
          <li><Link className="link" to="/ContactUs">Contact</Link></li>
          <li><Link className="link" to="/Skills">Skills</Link></li>
          <li><Link className="link" to="/profile">profile</Link></li>
        </ul>
    </nav>
    </div>
  )
}
