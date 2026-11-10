class Employee {
  constructor(
    public name: string,
    protected salary: number,
  ) {}

  get sal(): number {
    return this.salary;
  }

  set sal(newSal: number) {
    this.salary = newSal;
  }
  describe(): string {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  //   teamMemberCount: number;
  //   constructor(name: string, salary: number, teamMemberCount: number) {
  //     super(name, salary);
  //     this.teamMemberCount = teamMemberCount;
  //   }
  //Shorthand
  constructor(
    name: string,
    salary: number,
    public teamMemberCount: number,
  ) {
    super(name, salary);
  }

  describeManagerWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this.salary} Tk`;
  }
}

const emp1 = new Employee("alvee", 21000);
const man1 = new Manager("Alvee", 70000, 30);
console.log(man1);
console.log(man1.describe());
console.log(man1.describeManagerWork());
console.log(man1.describeManager());
