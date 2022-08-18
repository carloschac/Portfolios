
    let countdown = new Date ("Aug 28, 2022 14:56:25").getTime();
    let count = setInterval(function() {
        let getHour = new Date().getTime();
        console.log(getHour)
        let distance = countdown - getHour;
        console.log(distance)
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));   
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(days)
        console.log(hours)
        console.log(minutes)
        console.log(seconds)

        document.querySelector("#dias").innerHTML = "0" + days;
        document.querySelector("#horas").innerHTML = "0" + hours;
        document.querySelector("#minutos").innerHTML = "0" + minutes;
        document.querySelector("#segundos").innerHTML = seconds;

        if (distance < 0) {
            return;
        }

    
    }, 1000 )





