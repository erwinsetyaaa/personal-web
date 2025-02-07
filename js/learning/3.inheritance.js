class Animal {
  brain = true;
  legs = 0;
  name = "unknown name";

  sleep() {
    console.log(`${this.name} is sleeping`);
    console.log(`${this.name} has ${this.legs} legs`);
  }
}

class Human extends Animal {
  name = "leo"; //menimpa properti yang ada dianimal
  legs = 2;
}

const leo = new Human();
leo.sleep();
