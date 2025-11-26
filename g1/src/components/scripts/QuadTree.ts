import Particle from "./Particle";
import QuadNode from "./QuadNode";


export default class QuadTree {

    public root: QuadNode;
    public size: number;
    public particles: Particle[] |null = null;

    constructor(size: number) {
        this.root = new QuadNode(0, 0, size);
        this.size = size;
    }

    createTree(particles: Particle[]): void {
        if (particles.length > 1) {
            
        }
    }

}