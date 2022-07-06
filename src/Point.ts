export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number);

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`
    }

    distance(other: Point){
        //TODO
    };
    distance(x: number, y: number) {
        //TODO
    };

}
