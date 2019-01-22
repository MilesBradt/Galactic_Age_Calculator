import { Calc } from './../src/calc.js';

describe('Calc', function () {

  it('returns user age in Mercury years, .24 Earth years', function() {
    const age = 26;
    const mercury = new Calc();
    let output = mercury.mercuryYears(age);
    expect(output).toEqual(6.24);
  });

  it('returns user age in Venus years, .62 Earth years', function() {
    const age = 26;
    const venus = new Calc();
    let output = venus.venusYears(age);
    expect(output).toEqual(16.12);
  });

  it('returns user age in Mars years, 1.88 Earth years', function() {
    const age = 26;
    const mars = new Calc();
    let output = mars.marsYears(age);
    expect(output).toEqual(48.88);
  });

  it('returns user age in Jupiter years, 11.86 Earth years', function() {
    const age = 26;
    const jupiter = new Calc();
    let output = jupiter.jupiterYears(age);
    expect(output).toEqual(308.36);
  });

  it('determines how many years the user has left on Mercury', function() {
    const age = 26;
    const lifeExpectancy = 85;
    const mercury = new Calc();
    let convertedAge = mercury.mercuryYears(age);
    let output = mercury.mercuryYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(14.16);
  });

  it('determines how many years the user has left on Venus', function() {
    const age = 26;
    const lifeExpectancy = 85;
    const venus = new Calc();
    let convertedAge = venus.venusYears(age);
    let output = venus.venusYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(36.58);
  });

  it('determines how many years the user has left on Mars', function() {
    const age = 26;
    const lifeExpectancy = 85;
    const mars = new Calc();
    let convertedAge = mars.marsYears(age);
    let output = mars.marsYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(110.92);
  });

  it('determines how many years the user has left on Jupiter', function() {
    const age = 26;
    const lifeExpectancy = 85;
    const jupiter = new Calc();
    let convertedAge = jupiter.jupiterYears(age);
    let output = jupiter.jupiterYearsLeft(lifeExpectancy, convertedAge);
    expect(output).toEqual(699.74);
  });

  it('determines how many years over the life expentancy they are on Mercury', function() {
    const age = 90;
    const lifeExpectancy = 85;
    const mercury = new Calc();

    let convertedAge = mercury.mercuryYears(age);
    let convertedLifeExpectancy = mercury.mercuryYears(lifeExpectancy)
    let output = mercury.mercuryLifeOverExpectancy(convertedAge, convertedLifeExpectancy);
  
    expect(output).toEqual(1.2);
  });

  it('determines how many years over the life expentancy they are on Venus', function() {
    const age = 90;
    const lifeExpectancy = 85;
    const venus = new Calc();

    let convertedAge = venus.venusYears(age);
    let convertedLifeExpectancy = venus.venusYears(lifeExpectancy)
    let output = venus.venusLifeOverExpectancy(convertedAge, convertedLifeExpectancy);

    expect(output).toEqual(3.1);
  });

  it('determines how many years over the life expentancy they are on Mars', function() {
    const age = 90;
    const lifeExpectancy = 85;
    const mars = new Calc();

    let convertedAge = mars.marsYears(age);
    let convertedLifeExpectancy = mars.marsYears(lifeExpectancy)
    let output = mars.marsLifeOverExpectancy(convertedAge, convertedLifeExpectancy);

    expect(output).toEqual(9.4);
  });

  it('determines how many years over the life expentancy they are on Jupiter', function() {
    const age = 90;
    const lifeExpectancy = 85;
    const jupiter = new Calc();

    let convertedAge = jupiter.jupiterYears(age);
    let convertedLifeExpectancy = jupiter.jupiterYears(lifeExpectancy)
    let output = jupiter.jupiterLifeOverExpectancy(convertedAge, convertedLifeExpectancy);

    expect(output).toEqual(59.3);
  });
});
