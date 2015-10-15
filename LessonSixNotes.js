function Human(name, gender, hobby) {
  this.name = name;
  this.gender = gender;
  this.hobby = hobby;

  this.planetaryOrigin = 'Earth';

  this.explainYourself = function () {
    return "I'm a Human!";
  }
}