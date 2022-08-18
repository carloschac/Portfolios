
    let countdown = new Date ("Aug 26, 2023 15;37:25").getTime();
    let count = setInterval(function() {
        let getHour = new Date().getTime();
        let distance = countdown - getHour;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector("#dias").innerHTML = days
        document.querySelector("#horas").innerHTML = hours
        document.querySelector("#minutos").innerHTML = minutes
        document.querySelector("#segundos").innerHTML = seconds
    }, 1000 )





