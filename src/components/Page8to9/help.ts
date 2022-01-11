import bspline from "b-spline";
import { height } from "./constants";

export class Path {
  points: [number, number][];
  weights: number[];
  knots: number[];

  constructor(lucky: boolean) {
    let n = 0;
    const points = new Array<[number, number]>();
    const weights = new Array<number>();

    const p = (x: number, y: number, w = 1) => {
      points.push([x + (873 - 557) / 2, y]);
      weights.push(w);
      ++n;
    };

    p(288.498, 0 - 60);
    p(288.498, 58 - 60);
    for (let i = 0; i < 30; ++i) {
      p(Math.random() * 557, Math.random() * height);
    }
    if (lucky) {
      p(130.5, 529.5 + 60);
      p(130.5, 566.5 + 60);
    } else {
      p(430, 529.5 + 60);
      p(430, 566.5 + 60);
    }

    const knots = [];
    knots.push(0, 0);
    for (let i = 0; i < n - 1; ++i) {
      knots.push(i);
    }
    knots.push(n - 2, n - 2);

    this.points = points;
    this.weights = weights;
    this.knots = knots;
  }

  getPoint(t: number) {
    const [x, y] = bspline(t, 2, this.points, this.knots, this.weights);
    return { x, y };
  }
}
