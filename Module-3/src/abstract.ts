abstract class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  abstract calculateSalary(): number;
}

class Developer extends Employee {
  calculateSalary(): number {
    return this.salary + 40000;
  }
}
class Engineer extends Employee {
  calculateSalary(): number {
    return this.salary + 50000;
  }
}

const dev1 = new Developer("Alvee", 25000);
const eng1 = new Engineer("Mahia", 28000);

console.log(dev1.calculateSalary());
console.log(eng1.calculateSalary());
