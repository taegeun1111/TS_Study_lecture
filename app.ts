function add(n1: number, n2: number): number {
    return (n1 + n2);
}

function printResult(num: number) {
    return console.log(`Result : ${num}`)
}

printResult(add(5, 12));

// let combineValues : Function;
let combineValues: (a:number, b:number) => number;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(7,7));

// combineValues = 5;
