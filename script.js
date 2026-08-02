// NOVA AI OS Core

console.log("NOVA AI OS initialized");

let messages = [
    "Scanning systems...",
    "Checking network...",
    "AI Core online...",
    "All systems ready."
];

let i = 0;

setInterval(() => {
    console.log(messages[i]);
    i++;

    if (i >= messages.length) {
        i = 0;
    }
}, 2000);
