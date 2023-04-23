/* Weather App */
function addCity(city) {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=en`, function(data){
        document.querySelector("#city").textContent = data.name
        document.querySelector("#temp").textContent = (Math.round((data.main.temp)*10))/10
        document.querySelector("#temp").innerHTML += "<sup>°C</sup>"
        document.querySelector("#wicon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector("#description").textContent = data.weather[0].description
        document.querySelector(".container").style.visibility = "visible"
        console.dir(data)
    })
    .fail(function() {
        alert("City not found");
    })
}
document.querySelector("button").addEventListener("click", function () {
    if (!document.querySelector("input").value) {
       alert("Type a City") 
    } else {
        let city = document.querySelector("input").value.split(" ").join("%20")
        document.querySelector("input").value = ""
        addCity(city)
    }
})
document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        if (!document.querySelector("input").value) {
            alert("Type a City") 
        } else {
             let city = document.querySelector("input").value.split(" ").join("%20")
             document.querySelector("input").value = ""
             addCity(city)
        }
    }
})

/* Copyright Date */
const year = document.getElementById('currYear');
year.innerHTML = new Date().getFullYear();