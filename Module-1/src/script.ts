let myString: string = "Alvee";
let muNum: number = 55;
let myBool: boolean = true;
let mySymbol: symbol = Symbol();
let bigInt: bigint = 100n;

const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(15, 330));

// Array

const arr: string[] = ["Alvee", "Mahai"];
const names: Array<string> = ["Alvee", "Mahai"];

// Tuples

const dhakaLatlog: readonly [number, number] = [12.3, 123.53];
