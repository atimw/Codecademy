// create function to run kelvin to fahrenheit conversion
let kelvin = function(kelvinTemp){
  
    // set a constant variable for current kelvin temp
    const kelvin = kelvinTemp;
  
    // convert kelvin to celsius
    let celsius = kelvin - 273;
  
    // convert kelvin to fahrenheit
    let fahrenheit =  celsius * (9/5) + 32;
  
    // round down fahrenheit
    fahrenheit = Math.floor(fahrenheit);
  
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
  }
  kelvin(0);