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
}