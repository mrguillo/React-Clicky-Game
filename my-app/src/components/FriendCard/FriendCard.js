import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import "./FriendCard.css";

const FriendCard = props => (

    <Figure >
      <Figure.Image
        className="shadow p-3 mb-5 bg-white z-depth-5" 
        width={171}
        height={180}
        alt="171x180"
        value={props.id}
        src={props.image}
        onClick={() => props.handleClick(props.id)}
        className="shadow-box-example z-depth-5"/>
      <Figure.Caption id="caption" src={props.title}>
      {props.title}
      </Figure.Caption>
    </Figure>

);


export default FriendCard;