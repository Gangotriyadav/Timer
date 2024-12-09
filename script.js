setInterval (() => {
    let day = new Date ();
    let hour = day.getHours() % 12 < 10 ? `0${day.getHours() % 12}` : day.getHours()%12;
    let minute = day.getMinutes() < 10 ? `0${day.getMinutes()}` : day.getMinutes() ;
    let second = day.getSeconds() < 10 ? `0${day.getSeconds()}` : day.getSeconds() ;
    document.getElementById('time').innerHTML = `${hour}:${minute}:${second}`;
}, 1000);




