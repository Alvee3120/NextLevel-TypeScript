//type of

let x = 123;

console.log(typeof x);

//type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase;
  } else return value;
};

//truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const user1: User = {
  name: "alvee",
  address: {
    street: "761Safura",
  },
};

const ShowAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
  }
};


