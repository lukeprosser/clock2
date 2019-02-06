// Store elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  // Get the current date
  const now = new Date();

  // Get the current seconds
  const seconds = now.getSeconds();
  // Divide seconds by 60 to calculate percentage
  // 90 offsets the default 90 degree offset
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Get the current minutes
  const minutes = now.getMinutes();
  // Get minutes as percentage
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Get the current hours
  const hours = now.getHours();
  // Divide by 12 to get hours percentage
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Check for vertical position of secondHand
  if(secondsDegrees === 90) {
    // Remove transition at vertical point to avoid glitch
    // Loop through all hands at this point to avoid glitches for each of them
    allHands.forEach(hand => hand.style.transition = 'none');
  } else {
    // Reset inline style to revert back to stylesheet
    allHands.forEach(hand => hand.style.transition = '');
  }
}

// Run setDate() every second
setInterval(setDate, 1000);