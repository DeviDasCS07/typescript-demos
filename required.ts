// Make all properties in T required

/*
export type Required<T> = {
    [P in keyof T]-?: T[P];
}
*/


type PartialCoOrdinate = {x?: number, y?: number};
type CoOrdinate = Required<PartialCoOrdinate>; // same as {x: number, y: number}

type CircleConfig = {
    color?: string;
    radius?: number;
}

class Circle {
    private config: Required<CircleConfig>;
    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 10
        };
    }

    draw() {
        // no null check needed
        console.log(
            'Draw a circle',
            'Color', this.config.color,
            'Radius',this.config.radius
            )
    }
}

const circle = new Circle({});
circle.draw();