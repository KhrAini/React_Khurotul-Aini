class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hai, nama saya ${this.name} dan saya berumur ${this.age} tahun.`);
    }
}

const person1 = new Person("lala", 30);
person1.introduce(); 

const person2 = new Person("nana", 25);
person2.introduce(); 
