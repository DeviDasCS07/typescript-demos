// Make all properties in T readonly

/*
export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
*/
type EmpDetails = {name: string, age: number};

type ReadOnlyEmpDetails = Readonly<EmpDetails>;

function  makeReadOnly<T>(object: T): Readonly<T> {
    return Object.freeze({...object});
}

const editablePoint = {x: 0, y: 0};
editablePoint.x = 30;
console.log(editablePoint);
const readOnlyPoint = makeReadOnly(editablePoint);
// readOnlyPoint.x = 20; error

