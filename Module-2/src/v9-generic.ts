//generic

const wrapAny = <T>(value: T) => {
  return [value];
};

const strArr = wrapAny("Abc");
const strArr2 = wrapAny<string>("Abc");

const numArr = wrapAny(123);
const numArr2 = wrapAny<number>(123);

// interface UserResponse {
//   data: {
//     name: string;
//     role: string;
//   };
//   sucess: boolean;
//   statuscode: number;
// }

// interface BlogResponse {
//   data: {
//     title: string;
//     description: string;
//     date: string;
//   };
//   sucess: boolean;
//   statuscode: number;
// }

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  sucess: boolean;
  statuscode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
  data: {
    name: "Alvee",
    role: "Admin",
  },
  sucess: true,
  statuscode: 200,
};
