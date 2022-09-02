class SpaceRace {
  constructor(age){
    this.age = age;
  };

   ageCalculator(age, spaceTime) {
    if (spaceTime === 1) {
      console.log("mercury");
      console.log(age);
    } else if (spaceTime === 2) {
      console.log("Venus");
    } else if (spaceTime === 3) {
      console.log("Mars");
    }else if (spaceTime === 4) {
      console.log("Jupiter");
    }
  };

  lifeExpectancy(age, spaceTime) {
    if (spaceTime === 1) {
      console.log("mercury");
      console.log(age);
    } else if (spaceTime === 2) {
      console.log("Venus");
    } else if (spaceTime === 3) {
      console.log("Mars");
    }else if (spaceTime === 4) {
      console.log("Jupiter");
    }
  };
}