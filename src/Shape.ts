import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(
    points: Point[],
    color: string = "Red",
    filled: boolean = false
  ) {
    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    return `A Shape with color of ${this.color} and filled / not filled Points: ${this.points}`;
    //TODO
  }

  getPerimeter() {
    //TODO
  }

  abstract getType(): string;
}
