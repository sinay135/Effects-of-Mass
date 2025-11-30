import Particle from "./scripts/Particle"
import type QuadNode from "./scripts/QuadNode";
import type QuadTree from "./scripts/QuadTree";


function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function Summon(props: {size: number, setParticles: any, setQuads: any, qt: QuadTree}) {    
    
    function summonNew() {
        const quantity: number = 15;
        const mass: number = 10;
        let particles: Particle[] = [];

        for (let i = 0; i < quantity; i++) {
            const x: number = randInt(0, props.size);
            const y: number = randInt(0, props.size);
            particles.push(new Particle(x, y, mass));
        }

        props.qt.reset();
        const ql: QuadNode[] = props.qt.createTree(particles);
        props.setQuads(ql);
        props.setParticles(particles)
    }


    return (
        <button style={{marginTop: "10px"}} onClick={summonNew} >Yes</button>
    )
}