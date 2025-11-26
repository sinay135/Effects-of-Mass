

export default class Particle {

    x: number;
    y: number;
    velx = 0;
    vely = 0;
    mass: number;

    constructor(x: number, y: number, mass: number) {
        this.x = x;
        this.y = y;
        this.mass = mass;
    }
    
    update(): void {
        this.x += this.velx;
        this.y += this.vely;
    }

}