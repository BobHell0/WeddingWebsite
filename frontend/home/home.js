
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

    const dayText = document.getElementById("DayText");
    dayText.textContent = days;
    document.getElementById("HourText").textContent = hours;
    document.getElementById("MinuteText").textContent = minutes;
    document.getElementById("SecondText").textContent = seconds;

}, 1000);


