// Make all properties in T optional

/*
export type Partial<T> = {
    [P in keyof  T]?: T[P];
}
*/

type Point = { x: number, y: number};
type PartialPoint = Partial<Point>; // {x?: number, y?: number}


class State<T> {
    constructor(public current: T) { }

    update(next: Partial<T>){
        this.current = {...this.current, ...next};
    }
}

// usage
const state = new State({x: 10, y: 20});
console.log(state);
state.update({y:30});
console.log(state);