//set username variable
let userName = 'Tim';
//if userName is set, greet user, otherwise say hello
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//set user question
let userQuestion = 'Will I be rich?';
//if username is set log username and question, otherwise just log question
userName ? console.log(`${userName} asks: ${userQuestion}`) : console.log(`${userQuestion}`);
//set random number
let randomNumber = Math.floor(Math.random() * 8);
//set eightball
let eightBall = '';
//create control flow taking in random number to dictate eightball result
switch (randomNumber) {
  case 0:
    eightBall = ('It is certain');
    break;
  case 1:
    eightBall = ('It is decidedly so');
    break;
  case 2:
    eightBall = ('Reply hazy try again');
    break;
  case 3:
    eightBall = ('Cannot predict now');
    break;
  case 4:
    eightBall = ('Do not count on it');
    break;
  case 5:
    eightBall = ('My sources say no');
    break;
  case 6:
    eightBall = ('Outlook not so good');
    break;
  case 7:
    eightBall = ('Signs point to yes');
    break;
  default:
    eightBall = ('Missing on invalid question');
    break;
}

//output eightball answer
console.log(eightBall);