// Exercise: Create the user object with the following properties:
// fullName - a string
// setFullName - a method.
// It takes two arguments:
// firstName
// lastName
// It sets the fullName property based on the provided arguments.

class User {
  constructor() {
    this.fullName = "";
  }

  setFullName(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
  }
}

// Exercise: Create the Person class with the name and age properties.
// Set them in the constructor.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Exercise: Add the getOlder method to the Person class to increment the age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getOlder() {
    return this.age++;
  }
}

// Exercise: Use the makeSound function with the provided objects

function makeSound() {
  return `${this.name} goes "${this.sound}"`;
}

const dog = {
  name: "Dog",
  sound: "Woof",
};

const cat = {
  name: "Cat",
  sound: "Meow",
};

dog.dogSound = makeSound; // dog.dogSound creates a method inside an object dog and assign it to makeSound function
cat.catSound = makeSound;

console.log(dog.dogSound());
console.log(cat.catSound());
// console.log(dog);

// Exercise: use call with the makeSound function.

function makeSound() {
  return `${this.name} goes "${this.sound}"`;
}

const dog = {
  name: "Dog",
  sound: "Woof",
};

const cat = {
  name: "Cat",
  sound: "Meow",
};

console.log(makeSound.call(dog)); // here object dog does NOT have a makeSound method !!! I am calling makeSound() with this = dog
console.log(makeSound.call(cat));

//   Exercise: use bind with the makeSound function.

function makeSound() {
  return `${this.name} goes "${this.sound}"`;
}

const dog = {
  name: "Dog",
  sound: "Woof",
};

const cat = {
  name: "Cat",
  sound: "Meow",
};

const dogSound = makeSound.bind(dog);
const catSound = makeSound.bind(cat);

console.log(dogSound()); // here object dog does NOT have a makeSound method !!!
console.log(catSound());

// !!!!! call -  Calls the function immediately with a given this value
// !!!! bind - Returns a new function with this bound to a given value. Does not call the function immediately! So I can use it later

// Exercise: fix this code

class MouseTracker {
  constructor() {
    this.shouldPrintMousePosition = true;

    document.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove(event) {
    if (!this.shouldPrintMousePosition) {
      return;
    }
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  }
}

new MouseTracker();

///////////////////////////////////////////////

class MouseTracker {
    constructor() {
      this.shouldPrintMousePosition = true;
  
      document.addEventListener('mousemove', this.handleMouseMove.bind(this)); // This ensures that 'this' inside handleMouseMove always refers to the class instance.
    }
  
    handleMouseMove(event) {
      if (!this.shouldPrintMousePosition) {
        return;
      }
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    }
}
  
new MouseTracker();


// Exercise: write the divide function using an arrow function.

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

// Exercise:
// Adjust the MouseTracker class so that it uses an arrow function.

class MouseTracker {
    constructor() {
      this.shouldPrintMousePosition = true;
  
      document.addEventListener('mousemove', this.handleMouseMove);
    }
  
    handleMouseMove(event) {
      if (!this.shouldPrintMousePosition) {
        return;
      }
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    }
}
  
  new MouseTracker();

/////////////////////////////////////////////

class MouseTracker {
    constructor() {
      this.shouldPrintMousePosition = true;
  
      document.addEventListener('mousemove', this.handleMouseMove);
    }
  
    handleMouseMove = (event) => {
      if (!this.shouldPrintMousePosition) {
        return;
      }
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    };

}
  
new MouseTracker();
