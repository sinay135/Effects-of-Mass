import Particle from "./Particle";
import QuadNode from "./QuadNode";


export default class QuadTree {

    public root: QuadNode;
    public size: number;
    public particles: Particle[];

    constructor(particles: Particle[], size: number) {
        this.root = new QuadNode(0, 0, size);
        this.size = size;
        this.particles = particles;
    }


}