document.addEventListener('DOMContentLoaded', () => {
 var time;
 var display = document.querySelector('#timer');
 console.log(display);
 var pauseButton = document.querySelector('#pause');
 var resetButton = document.querySelector('#reset');

// event listener for timer button countDown reassignment
display.addEventListener("click", inputReassignment());

pauseButton.addEventListener("click", () => alert('heyyy'));

resetButton.addEventListener("click", () => alert('suppp'));

});

function startTimer(duration, display, pause = true) {
var timerDuration = duration;
var hours; 
var minutes; 
var seconds; 

while (pause === false){
setInterval(function () {
    hours = parseInt(inputArr[0], 10);
    minutes = parseInt(inputArr[1], 10);
    seconds = parseInt(inputArr[2], 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timerDuration <= 0) {
        alert("Timer's up!");
    }
}, 1000);
}
   
}

function inputReassignment() { 
    // pause the timer
    let pause = true;
    // reassign the hour, minute, and second to input  
    let passed = false;
    while (passed === false) {   
    var input = prompt("Enter countdown time in format hh:mm:ss","hh:mm:ss");
    console.log(input);
    // check that there are 3 numbers 
    var inputArr = input.split(':');
    console.log(inputArr);   
    if (inputArr.length === 3) { /* &&  (typeof inputArr[0] === 'number') && (typeof inputArr[1] === 'number') && (typeof inputArr[2] === 'number')) */ 
        passed = true;
    }
}
    // call the start timer again with new duration
    startTimer(input, display, pause = false);
}    

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//     inputReassignment(fiveMinutes, display);
// };