// Activity 1-4

class person{
    static greet="hello i am static greet in person";
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log("hello i am a person ");
    }

    updateAge(age){
        return this.age=age;
    }
}

const person1=new person("Ankush",23);
person1.greeting();
console.log(person1.updateAge(22));

class students extends person {
  static countStudents = 10;
  constructor(name, age, studentId) {
    super(name, age, studentId);
    this.studentId = studentId;
    students.countStudents++;
    console.log(students.countStudents);
  }

  getStudentId() {
    return this.studentId;
  }

  greeting() {
    return `my name is ${this.name} and studentId is ${this.studentId}`;
  }
  static getStudentCount() {
    return `Total number of students: ${students.countStudents}`;
  }
}

const st1=new students("name",23,12);
console.log(st1.getStudentId());
console.log(st1.greeting());
console.log(person.greet);
console.log(students.getStudentCount());

// Activity 5

class account {
    #balance; 
    constructor(balance){
        this.#balance=balance
    }
    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }

    withdraw(amount){
        this.#balance-=amount;
        return this.#balance;
    }
}

const acc=new account(10000);
console.log(acc.deposit(10000));
console.log(acc.withdraw(500));
console.log(acc.balance);
