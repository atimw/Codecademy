let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnerAge = 18;

if (earlyReg && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && earlyReg) {
  console.log(`Your race number is ${raceNumber}, your race begins as 9:30am.`);
}