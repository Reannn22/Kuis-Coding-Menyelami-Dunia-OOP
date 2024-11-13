// 1. Class Animal
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

// 2. Class Rabbit (turunan dari Animal)
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal harus bernilai true untuk Rabbit
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

// 3. Class Eagle (turunan dari Animal)
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal harus bernilai false untuk Eagle
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

// 4. Instance dari class Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Instance dari class Eagle
const myEagle = new Eagle("Elo", 4);

// Menampilkan hasil untuk memastikan semuanya bekerja sesuai harapan
console.log(myRabbit.eat()); // "Labi sedang makan!"
console.log(myEagle.fly());  // "Elo sedang terbang!"
