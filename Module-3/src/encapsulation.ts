//Access Modifier

// public --> Can be access outside of the class ( edit and read)
//private --> Cannot be access outside of the class ( edit and read)
//protected --> Only if someclass inherit the class then it can be accessible

//readonly --> can be readonly

class Employee {
  constructor(
    public name: string,
    private salary: number,
  ) {}

  get sal(): number {
    return this.salary;
  }

  set sal(newSal: number) {
    this.salary = newSal;
  }
}

const emp1 = new Employee("alvee", 21000);

emp1.name = "Mahia";

// emp1.salary = 18000;
console.log(emp1.sal);

console.log(emp1.name);
console.log(emp1);
