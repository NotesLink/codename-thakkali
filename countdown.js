let finalDate = new Date("Jun 1, 2026 00:00:00").getTime();

let timer = document.getElementById("timer");

let update = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = finalDate - now;

    // Time calculations for days, hours, minutes and seconds
    let ddd = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(3, '0');
    let hh = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    let mm = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    let ss = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    
    for (let i = ddd.length; i >= 1; i--) {
        document.getElementById(`d${i}`).innerText = ddd[i - 1];
    }

    for (let i = hh.length; i >= 1; i--) {
        document.getElementById(`h${i}`).innerText = hh[i - 1];
    }

    for (let i = mm.length; i >= 1; i--) {
        document.getElementById(`m${i}`).innerText = mm[i - 1];
    }

    for (let i = ss.length; i >= 1; i--) {
        document.getElementById(`s${i}`).innerText = ss[i - 1];
    }
}, 1000);