// 1. 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static isAdult(age) {
        return age >= 18;
    }
}

const person = new Person("Sandro", 20);
console.log(person.introduce());
console.log(Person.isAdult(20)); 
console.log(Person.isAdult(16)); 

// 2. 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} says: Woof!`;
    }
}

const dog = new Dog("Buddy");
console.log(dog.speak());

// 3. 
class Button {
    constructor(label, color) {
        this.label = label;
        this.color = color;
    }

    render(containerId) {
        const button = document.createElement("button");
        button.innerText = this.label;
        button.style.backgroundColor = this.color;
        document.getElementById(containerId).appendChild(button);
    }
}

// ღილაკების შექმნა
const button1 = new Button("Click Me", "blue");
const button2 = new Button("Submit", "green");

document.body.innerHTML = '<div id="buttonContainer"></div>';
button1.render("buttonContainer");
button2.render("buttonContainer");

// 4. 
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    describe() {
        return `${this.brand} runs at ${this.speed} km/h.`;
    }
}

class Car extends Vehicle {
    constructor(brand, speed, model) {
        super(brand, speed);
        this.model = model;
    }

    describe() {
        return `${this.brand} ${this.model} runs at ${this.speed} km/h.`;
    }
}

const car1 = new Car("Toyota", 180, "Corolla");
const car2 = new Car("BMW", 200, "X5");
console.log(car1.describe());
console.log(car2.describe());

// 5. 
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    static filterByCategory(products, category) {
        return products.filter(product => product.category === category);
    }
}

const products = [
    new Product("Phone", 1000, "electronics"),
    new Product("TV", 1500, "electronics"),
    new Product("Table", 300, "furniture")
];

const electronics = Product.filterByCategory(products, "electronics");
console.log(electronics);

// 6. 
class Event {
    constructor(name, date) {
        this.name = name;
        this.date = new Date(date);
    }

    isUpcoming() {
        const today = new Date();
        return this.date > today;
    }
}

const events = [
    new Event("Concert", "2024-12-01"),
    new Event("Meeting", "2024-11-15")
];

events.forEach(event => {
    console.log(`${event.name} is upcoming: ${event.isUpcoming()}`);
});

// 7. 
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

class Warrior extends Character {
    attack(target) {
        target.health -= 10;
        console.log(`${this.name} attacked ${target.name}. ${target.name}'s health is now ${target.health}`);
    }
}

const warrior1 = new Warrior("Thor", 100);
const warrior2 = new Warrior("Loki", 90);

warrior1.attack(warrior2);
warrior2.attack(warrior1);

// 8. 
class Task {
    constructor(title, completed, priority) {
        this.title = title;
        this.completed = completed;
        this.priority = priority;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    static filterByPriority(tasks, priority) {
        return tasks.filter(task => task.priority === priority);
    }
}

const tasks = [
    new Task("Do homework", false, "high"),
    new Task("Clean room", true, "medium"),
    new Task("Go shopping", false, "high")
];

const highPriorityTasks = Task.filterByPriority(tasks, "high");
console.log(highPriorityTasks);

// 9. 
class Appointment {
    constructor(title, date) {
        this.title = title;
        this.date = new Date(date);
    }

    isToday() {
        const today = new Date();
        return this.date.toDateString() === today.toDateString();
    }
}

const appointment = new Appointment("Doctor Visit", new Date().toISOString());
console.log(`${appointment.title} is today: ${appointment.isToday()}`);
