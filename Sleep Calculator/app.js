// function to return given nights number of hours sleep
const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 7;
        break;
      default:
        return 'Invalid week day';
        break;
    }
  }
  
  // function to calculate sum of each nights sleep hours
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  // function to calculate ideal hours of sleep based on ideal sleep per night
  let idealHoursPerNight = 7;
  const getIdealSleepHours = (idealHoursPerNight) => {
    return idealHoursPerNight * 7;
  }
  
  // function to calculate total sleep debt
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(idealHoursPerNight);
    let sleepDeficit = idealSleepHours - actualSleepHours;
    let sleepBonus = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log('You\'ve gotten the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You\'ve gotten more than enough sleep. Oversleeping by ' + sleepBonus + ' hour(s).');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You\'ve not been getting enough sleep. Undersleeping by ' + sleepDeficit + ' hour(s). Get some rest!');
    } else {
      console.log('There seems to be an error in your recorded sleep history.');
    }
  }
  calculateSleepDebt();