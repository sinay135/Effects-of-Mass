import Particle from "./scripts/Particle"
import type QuadNode from "./scripts/QuadNode";
import type QuadTree from "./scripts/QuadTree";


function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function Summon(props: {size: number, setParticles: any, setQuads: any, qt: QuadTree}) {    
    
    function summonNew() {
        const quantity: number = 10000;
        const mass: number = 10;
        let particles: Particle[] = [];
        const existing: Set<string> = new Set<string>();

        for (let i = 0; i < quantity; i++) {
            let x: number = -1;
            let y: number = -1;
            while (x == -1 || existing.has(`${x}, ${y}`)) {
                x = randInt(0, props.size);
                y = randInt(0, props.size);
            }
            existing.add(`${x}, ${y}`);
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