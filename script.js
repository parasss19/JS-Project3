const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// To track the last hour,min,sec value
let previousSeconds = 0; 
let previousMinutes = 0; 
let previousHours = 0;  


function setDate(){
    //Seconds
    const seconds = new Date().getSeconds();
    if (seconds < previousSeconds) {
        secondHand.style.transition = 'none'; // Remove transition for seamless restart
    } else {
        secondHand.style.transition = 'transform 0.05s ease';
    }
    previousSeconds = seconds;

    const secDegree = ((seconds/60) * 360) + 90;    ////converting seconds into degree -> here add 90 coz we set initial position of niddles at 12 i.e transform:90deg but by default niddles are in 45  min position 
    secondHand.style.transform = `rotate(${secDegree}deg)`

    //Minutes
    const min = new Date().getMinutes();
    if (min < previousMinutes) {
        minHand.style.transition = 'none';
    } else {
        minHand.style.transition = 'transform 0.05s ease';
    }
    previousMinutes = min;

    const mindegree = ((min/60) * 360) + 90;        //converting min into degree
    minHand.style.transform = `rotate(${mindegree}deg)`


    //Minutes
    const hour = new Date().getHours();
    if (hour < previousHours) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = 'transform 0.05s ease';
    }
    previousHours = hour;

    const hourdegree = ((hour/12) * 360) + 90;      //converting hour into degree
    hourHand.style.transform = `rotate(${hourdegree}deg)`
    console.log(hour)
}
setInterval(setDate, 1000);



// [Note] 
// Problem - When seconds hand rotate 360 deg and its transition property reset and it flicker at 12 everytim
// Solution - We track min,hour,sec hands and disable the transition property when 360 deg is completed

// Explanation
// Continuous Rotation:
// The style.transition property is temporarily disabled whenever a reset occurs (e.g., seconds moves from 59 to 0). This ensures a seamless reset.

// State Tracking:
// By keeping track of the previous second, minute, and hour values, you can determine when the reset happens and selectively disable the transition.

// Smooth Animation:
// For non-reset cases, the transform property retains the transition to allow smooth hand movements.