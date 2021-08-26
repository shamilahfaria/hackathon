document.addEventListener('DOMContentLoaded', () => {
 var displayButton = document.querySelector('#timer');
 displayButton.setAttribute("height", "30px");
 var pauseButton = document.querySelector('#pause');
 var resetButton = document.querySelector('#reset');
 let input = '00:00:00';
 let totalSeconds = (parseInt(input[0], 10) * 3600) + (parseInt(input[1] ,10) * 60) + parseInt(input[2],10);
 console.log(totalSeconds);
    var oneHourAudio = new Audio('1 hour.mp3');
    var tenMinAudio = new Audio('10 minutes.mp3');
    var fiveMinAudio = new Audio('5 minutes.mp3'); 
    var fourMinAudio = new Audio('4 minutes.mp3');
    var threeMinAudio = new Audio('3 minutes.mp3');
    var twoMinAudio = new Audio('2 minutes.mp3');
    var oneMinAudio = new Audio('1 minutes.mp3');
    var tenSecAudio = new Audio('10 seconds.mp3');
    var nineSecAudio = new Audio('9 seconds.mp3');
    var eightSecAudio = new Audio('8 seconds.mp3');
    var sevenSecAudio = new Audio('7 seconds.mp3');
    var sixSecAudio = new Audio('6 seconds.mp3');
    var fiveSecAudio = new Audio('5 seconds.mp3');
    var fourSecAudio = new Audio('4 seconds.mp3');
    var threeSecAudio = new Audio('3 seconds.mp3');
    var twoSecAudio = new Audio('2 seconds.mp3');
    var oneSecAudio = new Audio('1 seconds.mp3');
    var timeUpAudio = new Audio('Time is Up.mp3');



// event listener for timer button countDown reassignment
displayButton.addEventListener("click", function(){
    input = inputReassignment();
    totalSeconds = (parseInt(input[0], 10) * 3600) + (parseInt(input[1] ,10) * 60) + parseInt(input[2],10);
    startTimer(totalSeconds);
});

pauseButton.addEventListener("click", () => clearInterval);

resetButton.addEventListener("click", () => (location.reload()));

function inputReassignment() {

    // reassign the hour, minute, and second to input  
    let passed = false;
    let inputArr;
    while (passed === false) {   
    input = prompt("Enter countdown time in format hh:mm:ss","hh:mm:ss");
    console.log(input);
    // check that there are 3 numbers 
    inputArr = input.split(':');
    console.log(inputArr);
    if (inputArr.length === 3) { /* &&  (typeof inputArr[0] === 'number') && (typeof inputArr[1] === 'number') && (typeof inputArr[2] === 'number')) */ 
        passed = true;
    }
}
input = inputArr;
 // call the start timer again with new duration
 return input;
}    

function startTimer(totalSeconds) {
let hours;
let minutes; 
let seconds;


setInterval(function () {
    
    hours = Math.floor(totalSeconds/3600);
    console.log(hours);
    minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    console.log(minutes);
    seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    console.log(seconds);

    //checking time to play audio
    if(hours === 1 && minutes === 0 && seconds === 0) oneHourAudio.play();
    if(minutes === 10 && hours === 0 && seconds === 0) tenMinAudio.play();
    if(minutes === 5 && hours === 0 && seconds === 0) fiveMinAudio.play();
    if(minutes === 4 && hours === 0 && seconds === 0) fourMinAudio.play();
    if(minutes === 3 && hours === 0 && seconds === 0) threeMinAudio.play();
    if(minutes === 2 && hours === 0 && seconds === 0) twoMinAudio.play();
    if(minutes === 1 && hours === 0 && seconds === 0) oneMinAudio.play();
    if(seconds === 10 && minutes === 0 && hours === 0) tenSecAudio.play();
    if(seconds === 9 && minutes === 0 && hours === 0) nineSecAudio.play();
    if(seconds === 8 && minutes === 0 && hours === 0) eightSecAudio.play();
    if(seconds === 7 && minutes === 0 && hours === 0) sevenSecAudio.play();
    if(seconds === 6 && minutes === 0 && hours === 0) sixSecAudio.play();
    if(seconds === 5 && minutes === 0 && hours === 0) fiveSecAudio.play();
    if(seconds === 4 && minutes === 0 && hours === 0) fourSecAudio.play();
    if(seconds === 3 && minutes === 0 && hours === 0) threeSecAudio.play();
    if(seconds === 2 && minutes === 0 && hours === 0) twoSecAudio.play();
    if(seconds === 1 && minutes === 0 && hours === 0) oneSecAudio.play();
    if(seconds === 0 && minutes === 0 && hours === 0) timeUpAudio.play();

    // reformatting to hh:mm:ss display
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // change display button value
    display = displayButton.value;
    displayButton.value = hours + ":" + minutes + ":" + seconds;
    console.log(displayButton.value);
    
    // decrements total seconds &
    // checks if timer is done
    if (--totalSeconds < 0) {
        // timeUpAudio.play();
        alert("Timer's up!");
        location.reload();
    }

}, 1000);
}

});