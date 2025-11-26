import Particle from "./Particle";



export default class QuadNode {

    public x: number;
    public y: number;
    public size: [number, number];
    public mass: number;

    public particle: Particle | null;
    public parent: QuadNode;
    public children: QuadNode[];

    constructor(_x: number, _y: number, _sizex: number, _sizey: number, _mass: number, _parent: QuadNode) {
        this.x = _x;
        this.y = _y;
        this.size = [_sizex, _sizey];
        this.mass = _mass;

        this.particle = null;
        this.parent = _parent;
        this.children = new Array<QuadNode>(4);
    }
}