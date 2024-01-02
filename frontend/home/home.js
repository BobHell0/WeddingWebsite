

var weddingDate = new Date ("Jan 1 , 2025 11:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    var days;
    var hours;
    var minutes;
    var seconds;

    if (timeLeft > 0) {
        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (100 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    } else {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    document.getElementById("DayText").innerHTML = days;
    document.getElementById("HourText").innerHTML = hours;
    document.getElementById("MinuteText").innerHTML = minutes;
    document.getElementById("SecondText").innerHTML = seconds;

}, 1000);


