import React from 'react';
import logo from './logo.png';

export default function Header(props) {
    return (
    <header className="header">
        <div className="logo">
        <img className="logo-img"src={logo} alt="logo of the drag and drop project" />
        Drag'n'Drop
        </div>
        <div>
                <h1>Upload your files</h1>
        </div>
        <div className="signout">
            <a href="#/signin"> SignOut</a>

        </div>
    </header>
    )
}