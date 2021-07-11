let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// use an array method to remove the last string of the array secretMessage
//console.log(secretMessage.length);
secretMessage.pop();
//console.log(secretMessage.length);

// use an array message to add the words to and Program as seperate string to the end of secretMessage
secretMessage.push('to');
secretMessage.push('Program');
//console.log(secretMessage);

// change the word easily to right by accessing the index and replacing it
//console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
//console.log(secretMessage[7]);

// use an array method to remove the first string of the array
secretMessage.shift();
//console.log(secretMessage);

// use an array method to add the string Programming to the beginning of the array
secretMessage.unshift('Programming');
//console.log(secretMessage);

// use an array method to remove the strings get, right, the, first, time and replace them with know
//console.log(secretMessage);
//console.log(secretMessage.indexOf('get'));
//console.log(secretMessage.indexOf('time,'));
secretMessage.splice(6,5,'know,');
//console.log(secretMessage);
console.log(secretMessage.join(' '));