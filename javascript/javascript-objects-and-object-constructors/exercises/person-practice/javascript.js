function Student(name, age, year){
    this.name = name;
    this.age = age;
    this.year = year;
}

function Teacher(){
    
}

Student.prototype.sayName = function () {
    return `${this.name} is a student!`;
}

const student1 = new Student('Kaleb', 1, 4);