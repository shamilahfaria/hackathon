document.addEventListener('DOMContentLoaded', () => {
 
 
 
 
    var displayButton = document.querySelector('#timer');
 var pauseButton = document.querySelector('#pause');
 var resetButton = document.querySelector('#reset');
 let input = inputReassignment();
 let totalSeconds = (parseInt(input[0], 10) * 3600) + (parseInt(input[1] ,10) * 60) + parseInt(input[2],10);
 console.log(totalSeconds);




// event listener for timer button countDown reassignment
displayButton.addEventListener("click", inputReassignment());

pauseButton.addEventListener("click", () => alert('heyyy'));

resetButton.addEventListener("click", () => alert('suppp'));

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
 startTimer(totalSeconds);
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
        alert("Timer's up!");
        location.reload();
    }

}, 1000);
}

});