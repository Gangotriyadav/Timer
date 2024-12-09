setInterval (() => {
    let day = new Date ();
    hour = day.getHours() * 30;
    minute = day.getMinutes () * 6;
    second = day.getSeconds () * 6;
}, 1000);

const clock = document.getElementById('time');