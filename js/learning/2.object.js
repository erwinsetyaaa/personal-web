class Dog {
  constructor(
    // properties
    name = "",
    color = "",
    eyeColor = "",
    height = 0,
    weight = 0,
    length = 0
  ) {
    this.name = name;
    this.color = color;
  }

  // method
  sit() {
    console.log("Dog is sitting");
  }

  layDown() {
    console.log("Dog is laying down");
  }
}

let bobby = new Dog("Bobby", "white");

console.log(bobby.name);
console.log(bobby.color);

bobby.sit();


