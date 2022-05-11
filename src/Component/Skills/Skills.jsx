import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';




export default function Skills
() {
return (
    <div className="main-skill">y
        <div className="grid-container">
            <div className="grid-item">
                <img src={HTML} alt="HTML icon" />
                <p>HTML</p>
            </div>
            <div className="grid-item">
                <img src={CSS} alt="HTML icon" />
                <p>CSS</p>
            </div>
            <div className="grid-item">
                <img src={JavaScript} alt="HTML icon" />
                <p>JAVASCRIPT</p>
            </div>  
            <div className="grid-item">
                <img src={ReactImg} alt="HTML icon" />
                <p>REACT</p>
            </div>
            <div className="grid-item">
                <img src={GitHub} alt="HTML icon" />
                <p>GITHUB</p>
            </div>
            <div className="grid-item">
                <img src={Node} alt="HTML icon" />
                <p>NODE JS</p>
            </div>  
        </div>
    </div>
);
}

