// set race number
let raceNumber = Math.floor(Math.random() * 1000);
// set reg status
let earlyReg = true;
// set runner age
let runnerAge = 31;

// if runner earlyReg and adult over 18, add 1000 to race number
if (earlyReg && runnerAge >= 18) {
  raceNumber += 1000;
}

/*
If runner is 18+ and earlyReg, give number and 9:30 race time. If runner is 18+ and not earlyReg, give number and 11:00 race time. Adults exactly 18 should see reg desk. All youth have 12:30 race time
*/
if (runnerAge > 18 && earlyReg) {
  console.log(`Your race number is ${raceNumber}, your race begins at 9:30am.`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`Your race number is ${raceNumber}, your race begins at 11:00am.`)
} else if (runnerAge === 18) {
  console.log('Please see the registration desk.');
} else {
  console.log(`Your race number is ${raceNumber}, your race begins at 12:30pm.`);
}

