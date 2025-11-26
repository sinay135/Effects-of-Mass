import Particle from "./Particle";



export default class QuadNode {

    public x: number;
    public y: number;
    public size: number;
    public mass: number = 0;
    public COMVector: [number, number] = [0, 0];

    public particle: Particle |null = null;
    public children: QuadNode[] |null = null; 

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    quadify(): void {
        const s: number = this.size/2;
        const zero =  new QuadNode(this.x, this.y, s);          // top left
        const one = new QuadNode(this.x + s, this.y, s);        // top right
        const two = new QuadNode(this.x, this.y + s, s);        // bottom left
        const three = new QuadNode(this.x + s, this.y + s, s);  // bottom right

        this.children = [zero, one, two, three];
    }

    selectQuad(): QuadNode |null {

        

        return null;
    }

    insert(particle: Particle): void {
        if(this.particle == null && this.children == null) {    // if no particle
            this.particle = particle;
        } else if (this.particle != null) {                     // if particle exists
            this.quadify();
            // insert new particles
            this.particle = null;
        } else {                                                // if children exist
            
        }
    }

}