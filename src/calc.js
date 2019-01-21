class Calc {
  constructor(input) {
    this.calc = input;
  }

  mercuryYears(age) {
    const mercuryConvert = 0.24;
    let ageConvert = age * (mercuryConvert * 100)/100;
    return ageConvert;
  }

  venusYears(age) {
    const venusConvert = 0.62;
    let ageConvert = age * (venusConvert * 100)/100;
    return ageConvert
  }

  marsYears(age) {
    const marsConvert = 1.88;
    let ageConvert = age * (marsConvert * 100)/100;
    return ageConvert;
  }

  jupiterYears(age) {
    const jupiterConvert = 11.86;
    let ageConvert = age * (jupiterConvert * 100)/100;
    return ageConvert;
  }

  mercuryYearsLeft(lifeExpectancy, convert) {
    const mercuryConvert = 0.24;
    let lifeConvert = lifeExpectancy * (mercuryConvert * 100)/100;
    let output = lifeConvert - convert
    return Math.round(100 * output)/100;
  }

  venusYearsLeft(lifeExpectancy, convert) {
    const venusConvert = 0.62;
    let lifeConvert = lifeExpectancy * (venusConvert * 100)/100;
    let output = lifeConvert - convert
    return Math.round(100 * output)/100;
  }

  marsYearsLeft(lifeExpectancy, convert) {
    const marsConvert = 1.88;
    let lifeConvert = lifeExpectancy * (marsConvert * 100)/100;
    let output = lifeConvert - convert
    return Math.round(100 * output)/100;
  }

  jupiterYearsLeft(lifeExpectancy, convert) {
    const jupiterConvert = 11.86;
    let lifeConvert = lifeExpectancy * (jupiterConvert * 100)/100;
    let output = lifeConvert - convert
    return Math.round(100 * output)/100;
  }

  mercuryLifeOverExpectancy(age, lifeExpectancy) {
    return Math.round(100 *(age - lifeExpectancy))/100;
  }

  venusLifeOverExpectancy(age, lifeExpectancy) {
    return Math.round(100 *(age - lifeExpectancy))/100;
  }

  marsLifeOverExpectancy(age, lifeExpectancy) {
    return Math.round(100 *(age - lifeExpectancy))/100;
  }

  jupiterLifeOverExpectancy(age, lifeExpectancy) {
    return Math.round(100 *(age - lifeExpectancy))/100;
  }
}

export { Calc }
