import { Calc } from './../src/calc.js';

describe('Calc', function () {

  it('returns user age in Mercury years, .24 Earth years', function() {
    var age = 26;
    const mercury = new Calc();
    var output = mercury.mercuryYears(age);
    expect(output).toEqual(6.24);
  });

  it('returns user age in Venus years, .62 Earth years', function() {
    var age = 26;
    const venus = new Calc();
    var output = venus.venusYears(age);
    expect(output).toEqual(16.12);
  });

  it('returns user age in Mars years, 1.88 Earth years', function() {
    var age = 26;
    const mars = new Calc();
    var output = mars.marsYears(age);
    expect(output).toEqual(48.88);
  });

  it('returns user age in Jupiter years, 11.86 Earth years', function() {
    var age = 26;
    const jupiter = new Calc();
    var output = jupiter.jupiterYears(age);
    expect(output).toEqual(308.36);
  });

  it('determines how many years the user has left on Mercury', function() {
    var age = 26;
    var lifeExpectancy = 85;
    const mercury = new Calc();
    var convertedAge = mercury.mercuryYears(age);
    var output = mercury.mercuryYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(14.16);
  });

  it('determines how many years the user has left on Venus', function() {
    var age = 26;
    var lifeExpectancy = 85;
    const venus = new Calc();
    var convertedAge = venus.venusYears(age);
    var output = venus.venusYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(36.58);
  });

  it('determines how many years the user has left on Mars', function() {
    var age = 26;
    var lifeExpectancy = 85;
    const mars = new Calc();
    var convertedAge = mars.marsYears(age);
    var output = mars.marsYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(110.92);
  });

  it('determines how many years the user has left on Jupiter', function() {
    var age = 26;
    var lifeExpectancy = 85;
    const jupiter = new Calc();
    var convertedAge = jupiter.jupiterYears(age);
    var output = jupiter.jupiterYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(699.74);
  });

  it('determines how many years over the life expentancy they are on Mercury', function() {
    var age = 90;
    var lifeExpectancy = 85;
    const mercury = new Calc();
    if (age >= lifeExpectancy) {
      var convertedAge = mercury.mercuryYears(age);
      var convertedLifeExpectancy = mercury.mercuryYears(lifeExpectancy)
      var output = mercury.mercuryLifeOverExpectancy(convertedAge, convertedLifeExpectancy);
    } else {
    var convertedAge = mercury.mercuryYears(age);
    var output = mercury.mercuryYearsLeft(lifeExpectancy, convertedAge);
    }
    expect(output).toEqual(1.2);
  });

  it('determines how many years over the life expentancy they are on Venus', function() {
    var age = 90;
    var lifeExpectancy = 85;
    const venus = new Calc();
    if (age >= lifeExpectancy) {
      var convertedAge = venus.venusYears(age);
      var convertedLifeExpectancy = venus.venusYears(lifeExpectancy)
      var output = venus.venusLifeOverExpectancy(convertedAge, convertedLifeExpectancy);
    } else {
    var convertedAge = venus.venusYears(age);
    var output = venus.venusYearsLeft(lifeExpectancy, convertedAge);
    }
    expect(output).toEqual(3.1);
  });

  it('determines how many years over the life expentancy they are on Mars', function() {
    var age = 90;
    var lifeExpectancy = 85;
    const mars = new Calc();
    if (age >= lifeExpectancy) {
      var convertedAge = mars.marsYears(age);
      var convertedLifeExpectancy = mars.marsYears(lifeExpectancy)
      var output = mars.marsLifeOverExpectancy(convertedAge, convertedLifeExpectancy);
    } else {
    var convertedAge = mars.marsYears(age);
    var output = mars.marsYearsLeft(lifeExpectancy, convertedAge);
    }
    expect(output).toEqual(9.4);
  });

  it('determines how many years over the life expentancy they are on Jupiter', function() {
    var age = 90;
    var lifeExpectancy = 85;
    const jupiter = new Calc();
    if (age >= lifeExpectancy) {
      var convertedAge = jupiter.jupiterYears(age);
      var convertedLifeExpectancy = jupiter.jupiterYears(lifeExpectancy)
      var output = jupiter.jupiterLifeOverExpectancy(convertedAge, convertedLifeExpectancy);
    } else {
    var convertedAge = jupiter.jupiterYears(age);
    var output = jupiter.jupiterYearsLeft(lifeExpectancy, convertedAge);
    }
    expect(output).toEqual(59.3);
  });
});
