// putting all of dog years in a function
let dogYears = function(myName, myAge){

    // create variable representing early years
    let earlyYears = 2;
    earlyYears *= 10.5;
  
    // subtract first two years from my age which are accounted for
    laterYears = myAge - 2;
  
    // multiply later years by 4 to account for later years
    laterYears *= 4;
  
    // add early and later years to create total
    let myAgeInDogYears = earlyYears + laterYears;
  
    myName.toLowerCase();
  
    //print string with my name, age, and age in dog years
    console.log(`My name is ${myName}. I am ${myAge} yars old in human years which is ${myAgeInDogYears} years old in dog years.`);
  }
  
  dogYears('Tim', 31);