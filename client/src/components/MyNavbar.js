import React, {Component} from 'react';
import {Navbar} from 'react-bulma-components/full';
import {Link,NavLink} from 'react-router-dom';


const MyNavbar = props =>{
  
    return(
    <Navbar color="warning">
      <Navbar.Brand>
      <h1 className="title">
            Google Books
       </h1>
        <Navbar.Burger/>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item to="/" renderAs={Link}>Search</Navbar.Item>
          <Navbar.Item to="/saved" renderAs={Link}>Saved</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
    )
}

export default MyNavbar;