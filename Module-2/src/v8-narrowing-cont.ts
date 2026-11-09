//some caveat of type guard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else console.log("");
};

printAll(null);

//Equallity

const comapre = (x: string | number, y: boolean | number) => {
  if (x === y) {
    console.log(x, y);
  }
};

// in operator

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//instanceof

// const date = new Date();
// const err = new Error("something wrong");

// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};

showDate("12-12-1971");

// Discriminated union

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sidelenght: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.radius);
  } else {
    console.log(shape.sidelenght);
  }
};
