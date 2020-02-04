import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

const Nav = props => ( <> <Navbar >
  <Navbar.Brand id="nav" >
    Current Score: {props.score}  // 
    Top Score: {props.topScore}
  </Navbar.Brand>
</Navbar> < br /> </>

);

export default Nav;