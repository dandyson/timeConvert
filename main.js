function TimeConvert(num) { 
    let hours = num / 60;
    let separatedMins = hours % 1 * 60;
    let newMins = (separatedMins * 100);
    let convertedHours = Math.floor(num / 60);
    let convertedMins = Math.floor(separatedMins * 100) / 100;
    
    // code goes here  
    return `${convertedHours}:${convertedMins}`; 
  
  }
     
  // keep this function call here 
  console.log(TimeConvert(225));