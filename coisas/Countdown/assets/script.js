
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

        document.querySelector("#dias").innerHTML = days;
        if (days < 10) {
            document.querySelector("#dias").innerHTML = "0" + days;
        }

        document.querySelector("#horas").innerHTML = hours;
        if (hours < 10) {
            document.querySelector("#horas").innerHTML = "0" + hours;
        }

        document.querySelector("#minutos").innerHTML = minutes;
        if (minutes < 10) {
            ocument.querySelector("#minutos").innerHTML = minutes;
        }

        document.querySelector("#segundos").innerHTML = seconds;
        if (seconds <10) {
            document.querySelector("#segundos").innerHTML = "0" + seconds;
        }
    
    }, 1000 )

    function resetCountdown() {
        clearInterval(distance);
        
    }

    





