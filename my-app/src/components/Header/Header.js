import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Rick and Morty</b></h1>
        <br/>
        <h5 className="subtitle">Click on an image to get started! The goal is to select each image only once!</h5>
    </div>
)

export default Header;