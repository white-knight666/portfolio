import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./particle-config"

export default function ParticleBackground() {
    return (
        <div className="back">
        <Particles params={ParticleConfig}></Particles>
        
        </div>
    );
}

