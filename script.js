const terminal = document.getElementById("terminal");

let lines = [
    "Booting NOVA AI OS...",
    "Loading AI Core...",
    "Scanning sensors...",
    "Checking network...",
    "Security protocols active...",
    "All systems online."
];

let index = 0;

function bootSequence() {
    if (index < lines.length) {
        terminal.innerHTML = lines[index];
        index++;
        setTimeout(bootSequence, 1500);
    } else {
        terminal.innerHTML = "NOVA AI READY >_";
    }
}

bootSequence();


function updateTime(){
    document.getElementById("time").innerHTML =
    "TIME: " + new Date().toLocaleTimeString();
}

setInterval(updateTime,1000);
updateTime();
