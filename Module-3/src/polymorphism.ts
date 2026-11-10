class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  calculateSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  override calculateSalary() {
    return this.salary + 5000;
  }
}

const emp1 = new Employee("alvee", 21000);
const m1 = new Manager("alvee", 21000);
console.log(m1.calculateSalary());
console.log(emp1.calculateSalary());
