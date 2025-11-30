import { useEffect } from "react";
import Particle from "./scripts/Particle"
import type QuadTree from "./scripts/QuadTree";


function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Summon(props: {size: number, qt: QuadTree}) {    
    useEffect(() => {
        const quantity: number = 10;
        const mass: number = 10;
        let particles: Particle[] = [];

        for (let i = 0; i < quantity; i++) {
            const x: number = randInt(0, props.size);
            const y: number = randInt(0, props.size);
            particles.push(new Particle(x, y, mass));
        }

        props.qt.createTree(particles);
    })
    

    return (
        <button style={{marginTop: "10px"}}>Yes</button>
    )
}