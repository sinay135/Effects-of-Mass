import Particle from "./Particle";



export default class QuadNode {

    public x: number;
    public y: number;
    public size: number;
    public mass: number = 0;
    public COM: [number, number] = [0, 0];

    public particle: Particle | null = null;
    public children: QuadNode[] | null = null; 

    constructor(_x: number, _y: number, _size: number) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
    }
}