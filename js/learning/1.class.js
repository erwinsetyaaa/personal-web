class Dog {
    
  // properties
  name = "";
  color = "";
  eyeColor = "";
  height = 0;
  weight = 0;
  length = 0;
  // method
  sit() {
    console.log("Dog is sitting");
  }

  layDown() {
    console.log("Dog is laying down");
  }
}

let bobby = new Dog();

console.log(bobby.name);
