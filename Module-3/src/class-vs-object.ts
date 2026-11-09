class Employee {
  n: string;
  sal: number;

  constructor(name: string, salary: number) {
    this.n = name;
    this.sal = salary;
  }
}

const emp1 = new Employee("Alvee", 21000);
const emp2 = new Employee("Mahia", 18000);
