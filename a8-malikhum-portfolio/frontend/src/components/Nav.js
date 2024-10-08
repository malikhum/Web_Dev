//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../blog">Blog</Link>
        <Link to="../contact">Contact</Link>
        <Link to="../topics">Topics</Link>"
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../log">Log</Link>
        <Link to="../order">Order</Link>
       
    </nav>
  );
}

export default Nav;
