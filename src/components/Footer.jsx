import React from 'react';
import logo from './logo.png';

export default function Footer(props) {
    return (
    <footer className="footer">
        <div className="logo logo-footer">
        <img className="logo-img"src={logo} alt="logo of the drag and drop project" />
        Drag'n'Drop
        </div>
        <div>
                <h3>Built by</h3>
                <h3>August Ollé</h3>
        </div>

    </footer>
    )
}