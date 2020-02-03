import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


const Nav = props => (

<>
  <Navbar bg="light">
    <Navbar.Brand href="#home">
    Current Score: {props.score} Top Score: {props.topScore}</Navbar.Brand>
  </Navbar>
  <br />
</>
  // <nav>
  //   <ul>
  //     <li className="brand animated lightSpeedIn">
  //       <a href="/clicky-game/">{props.title}</a>
  //     </li>

  //     <li id="rw">{props.rightWrong}</li>

  //     <li id="cur-sco">Current Score: {props.score}</li>

  //     <li id="top-sco">Top Score: {props.topScore}</li>
  //   </ul>
  // </nav>
);

export default Nav;