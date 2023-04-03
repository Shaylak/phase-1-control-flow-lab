function scuberGreetingForFeet(distance){
    if (distance <= 400){
      return 'This one is on me!';
      
    } else if (distance > 400 && distance <= 2000) {
      return 'That will be twenty bucks.';

    } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';

    } else if (distance > 2500) {
      return 'No can do.';
    }
    console.log (scuberGreetingForFeet);
}  
  function ternaryCheckCity(city){
    if (city ==='NYC'){
      return 'Ok, sounds good.'
    } else if (city !== 'NYC'){
      return 'No go.'
    }

  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip) {
  case "generous": 
   return ("Thank you so much.")
  break;  
  case "not as generous":
   return ("Thank you.");
  break;
  
  default: "If anything else"
   return ("Bye.");
  }
}