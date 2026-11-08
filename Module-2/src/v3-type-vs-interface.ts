// interface is generally connected to object

// type alias is more connected to literals , unions , tupels, primitives

// Interface

interface Animal {
  spices: string;
}

interface Cat extends Animal {
  breed: string;
}

const oreo: Cat = {
  breed: "deshi",
  spices: "Felix",
};
const jemin: Cat = {
  breed: "Persian",
  spices: "Felix",
};

// Types intersection

type vehicle = {
  brand: string;
};

type Car = vehicle & {
  model: string;
};

const bluebird: Car = {
  model: "corolla",
  brand: "toyota",
};

// Interface Merge

interface IEmp {
  name: string;
}

interface IEmp {
  id: number;
}

const alvee: IEmp = {
  id: 213,
  name: "erqw",
};
