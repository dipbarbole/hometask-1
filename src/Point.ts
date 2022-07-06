export class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number);

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number | Point;
  distance(other: Point): number | Point;
  distance(a?: any, b?: any): number | Point {
    return Math.sqrt(Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2));
  }
}
