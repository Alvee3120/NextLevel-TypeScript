// Literal  Types : Create a type and fixed the value

type Status = "pending"; // any variable with status type can only contains value pending
const userStatus: Status = "pending";

// Basic Union : Combine of two types

type Identity = string | number;
const id: Identity = 22103120;
const id2: Identity = "Qfd23m3119";

// Literal Union :  any variable with Role type can only contains value admin and user
type Role = "admin" | "user";
const userRole: Role = "admin";
const userRole2: Role = "user";

//object Union

type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const alvee: User = { id: 3120, role: "admin", privileges: ["hi", "hello"] };
const mahia: User = { id: 3120, role: "member", plans: ["hi", "hello"] };

console.log(alvee);
