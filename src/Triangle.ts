import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  constructor(
    pointInstance1: Point,
    pointInstance2: Point,
    pointInstance3: Point
  ) {
    super([pointInstance1, pointInstance2, pointInstance3]);
  }

  toString(): string {
    //TODO
    return "Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]";
}

  getType(): string {
    //TODO
    return "equilateral triangle";
  }
}
