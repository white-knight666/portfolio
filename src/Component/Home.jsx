import React from 'react'
import me from './Images/me.jpg'

export default function Home() {
return (
    <div className="home">
    <div>
        <img src={me} alt="personal"/>
        </div>
        <div>
        <h4>Hello,My name is </h4>
        <h2>
            Muhammed Rajab
        </h2>
        <h1>
        I'm a Full Stack Developer.
        </h1>
        <p>
        I’m a full-stack developer specializing in building (and occasionally designing).<br/> exceptional digital experiences. Currently,<br/> I’m focused on building responsive full-stack web applications.
        </p>
        </div>
    </div>
)
}
