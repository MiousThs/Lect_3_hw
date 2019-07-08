class Animal {
  constructor(age) {
    this.type = 'default';
    this.gender = 'dfault';
    this._age = age || 0;
  }

  static isValidAge(age) {
    if (age > 20) {
      throw new Error("Critical age!");
      return false;
    } else if (age <= 20) {
      return true;
    }
  }

  // checkAge(age) {
  //   return Animal.isValidAge(age);
  // }
}

class Dog extends Animal {
  constructor() {
    super();
  }
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
  set age(val) {
    if (Animal.isValidAge(val)) {
      this._age = val;
    }
  }
  get age() {
    return this._age;
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
  set age(val) {
    if (Animal.isValidAge(val)) {
      this._age = val;
    }
  }
  get age() {
    return this._age;
  }
}

class Parrot extends Animal {
  constructor() {
    super();
  }
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
  set age(val) {
    if (Animal.isValidAge(val)) {
      this._age = val;
    }
  }
  get age() {
    return this._age;
  }
}
