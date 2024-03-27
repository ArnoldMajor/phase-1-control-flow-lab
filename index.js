let rides;

function scuberGreetingForFeet(rides){
  if (rides <= 400) {
    return ('This one is on me!');
  }

  else if (rides > 401 && rides <= 2000) {
    return ('That will be twenty bucks.');
  }

  else if (rides > 2000 && rides <= 2500) {
    return ('I will gladly take your thirty bucks.');
  }

  else (rides > 2500); {
    return ('No can do.');
  }
}

let city;

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

const tipAmount = 'generous';

let response;

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case 'generous':
      return response = 'Thank you so much.';

    case 'not as generous':
      return response = 'Thank you.';

    default:
      return response = 'Bye.';
  }
  
}

