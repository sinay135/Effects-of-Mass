import Particle from "./scripts/Particle"


function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Summon(props: {size: number, setParticles: any}) {    
    const quantity: number = 10;
    const mass: number = 10;
    for (let i = 0; i < quantity; i++) {
        const x: number = randInt(0, props.size);
        const y: number = randInt(0, props.size);
        props.setParticles((e: Particle[]) => e.push(new Particle(x, y, mass)));
    }

    return (
        <button style={{marginTop: "10px"}}>Yes</button>
    )
}