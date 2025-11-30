import Particle from "./Particle";

export default class QuadNode {

    public x: number;
    public y: number;
    public size: number;
    public mass: number = 0;
    public COMVector: [number, number] = [0, 0];

    public particle: Particle |null = null;
    public children: [QuadNode, QuadNode, QuadNode, QuadNode] |null = null; 

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

    selectQuad(px: number, py: number): QuadNode |null {
        if (this.children == null) return null;

        const s: number = this.size/2;
        if (px < this.x + s && py < this.y + s) return this.children[0];
        if (px >= this.x + s && py < this.y + s) return this.children[1];
        if (px < this.x + s && py >= this.y + s) return this.children[2];
        else return this.children[3];
    }

    insert(particle: Particle, quadList: QuadNode[]): void {
        if(this.particle == null && this.children == null) {    // if no particle
            this.particle = particle;
            quadList.push(this);
        } else if (this.particle != null) {                     // if particle exists insert both particles
            const index: number = quadList.indexOf(this);
            quadList.splice(index, 1);

            this.quadify();
            const prevParticle: Particle = this.particle;
            this.particle = null;
            this.selectQuad(prevParticle.x, prevParticle.y)?.insert(prevParticle, quadList);
            this.selectQuad(particle.x, particle.y)?.insert(particle, quadList);
        } else {                                                // if children exist insert particle into child
            this.selectQuad(particle.x, particle.y)?.insert(particle, quadList);
        }
    }
}