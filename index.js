function scuberGreetingForFeet(length) {
  let message;
  if (length <= 400) {
    message = 'This one is on me!';
  } else if (length <= 2000) {
    message = 'That will be twenty bucks.';
  } else if (length <= 2499) {
    message = 'I will gladly take your thirty bucks.';
  } else if (length >= 2500)
  message = 'No can do.'
  return message;
}

const feet = 300;
const greeting = scuberGreetingForFeet(feet);
console.log(greeting);

function ternaryCheckCity(isCity){
  return isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

console.log(NYC(true));
console.log(NYC(false));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// please work
console.log(switchOnCharmFromTip('generous'));

// I MADE THIS ^ WAY MORE CONFUSING THAN I SHOULD HAVE AT FIRST.

/*

function switchOnCharmFromTip(tip) {
  switch (true) {
    case tip >= 5:
      return "Thank you so much.";
    case tip <= 5:
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Example usage:
const tipAmount = 7;
console.log(switchOnCharmFromTip(tipAmount));

*/



