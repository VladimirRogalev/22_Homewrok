class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getUTCFullYear() - 1970;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {

    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = value;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }
    addEmployee (employee) {
        const index = this._employees.findIndex(e => e.id === employee.id)
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id)
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }
}

const john = new Person(1000, 'John', 'Smith', '2000-01-01');
console.log(john.id);
console.log(john.age);
console.log(window);
console.log(john.fullName());
john.lastName = 'Super';
console.log(john.fullName());
const alex = new Employee(2000, 'Alex', 'Jackson', "1985-05-19", 16000);
console.log(alex.salary)
console.log(alex)
alex.salary = 8000;
console.log(alex.salary);
alex.salary = 80000;
console.log(alex.salary);
console.log(' ====== Company ======');
const firm = new Company();
console.log(firm);
console.log(firm.addEmployee(alex));
console.log(firm.addEmployee(alex));
firm.addEmployee(alex);
firm.addEmployee(alex);
// firm.addEmployee(john);
console.log(firm.employees);
firm.employees.push(123);  ///
console.log(firm.employees);
const peter = new Employee(3000, 'Peter', 'Smith', "2003-06-06", 20000);
console.log(firm.addEmployee(peter));
console.log(firm.employees.length);
console.log(firm.removeEmployee(3000));
console.log(firm.employees.length);

//TODO OOP!