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

// optional , Default , Rest Parameter (...arg)

//optional , Use ? before :
const concatName = (fName: string, lName?: string) => {
  if (!lName) {
    return fName;
  }
  return fName + " " + lName;
};

concatName("Md Fazlah");
concatName("Md Fazlah", "Karim Alvee");

// Default
const greetings = (name: string, greet: string = "Hello") => {
  console.log(greet + " " + name);
};

greetings("Alvee");

//Rest

const sum = (...nums: number[]) => {
  return nums.reduce((total, sum) => total + sum, 0);
};

sum(1, 23, 46, 62, 6, 32, 62, 7, 86);

const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age, isActive] = args;
  console.log(name, age);
};

logUserAction("Alvee", 25, true);
