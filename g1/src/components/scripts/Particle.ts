

export default class Particle {

    x: number;
    y: number;
    velx = 0;
    vely = 0;
    mass: number;

    constructor(_x: number, _y: number, _mass: number) {
        this.x = _x;
        this.y = _y;
        this.mass = _mass;
    }
    
    update(): void {
        this.x += this.velx;
        this.y += this.vely;
    }

}