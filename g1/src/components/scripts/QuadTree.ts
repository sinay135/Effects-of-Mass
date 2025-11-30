import Particle from "./Particle";
import QuadNode from "./QuadNode";


export default class QuadTree {

    public root: QuadNode;
    public size: number;

    constructor(size: number) {
        this.root = new QuadNode(0, 0, size);
        this.size = size;
    }

    createTree(particles: Particle[]): QuadNode[] {
        const quadList: QuadNode[] = [];
        for (let p of particles) {
            this.root.insert(p, quadList);
        }
        return quadList;
    }

    reset():void {
        this.root = new QuadNode(0, 0, this.size);
    }

}