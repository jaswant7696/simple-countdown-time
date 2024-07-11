let seconds = 0;
let minutes = 0;
let hours = 0;
let day = 0;
function Time() { }
function clearTimer() {
    document.getElementById("seconds").value = 0
    document.getElementById("minutes").value = 0;
    document.getElementById("hours").value = 0;
    document.getElementById("day").value = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    day = 0;
    resetHandler()
}var interval;
const startHandler = () => {
    interval = setInterval(() => {
        document.getElementById("seconds").value = seconds += 1;
        if (seconds == 60) {
            document.getElementById("minutes").value = minutes += 1;
            seconds = 0;
        }
        if (minutes == 60) {
            document.getElementById("hours").value = hours += 1;
            minutes = 0;
        }
        if (hours == 24) {
            document.getElementById("day").value = day += 1;
            hours = 0;
        }
    }, 1000);
};
const resetHandler = () => {
    clearInterval(interval);
};

