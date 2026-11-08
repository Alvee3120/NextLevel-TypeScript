// top types : any , unknown

let x: any = "Hello World";
x = 123;
x = true;
x = "Alvee";

let y: unknown = "hello";
// y.length; not available

// core type: number , string , boolean etc

let a: unknown;

const num: number = 123;

let v: void;

a = num;

a = v;

// nullish type : null

interface User {
  name: string;
  id: number;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;

//unit type : void

const greet = () => {
  console.log("Hello Alvee");
};

// bottom type : never --> mainly used in error throwing

const getError = (msg: string) => {
  throw new Error(msg);
};
