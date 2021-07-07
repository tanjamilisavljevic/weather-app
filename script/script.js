import {getAverage} from './getAverage.js';


document.getElementById("run").addEventListener("click", runForecast);
document.getElementById('cityName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        runForecast()
    }
});


function displayDailyValues(day) {
    let minTemps = day.map((threeHourWeather) => threeHourWeather.main.temp_min);
    let maxTemps = day.map((threeHourWeather) => threeHourWeather.main.temp_max);
// make object array into array of numbers with .map
    let minTemp = Math.min(...minTemps);
    let maxTemp = Math.max(...maxTemps);

    let temps = day.map((threeHourWeather) => threeHourWeather.main.temp)
    const averageTemp = getAverage(temps);

    let humidities = day.map((threeHourWeather) => threeHourWeather.main.humidity)
    const averageHumidity = getAverage(humidities);

    let template = document.getElementById("forecastTemplate");
    let clone = template.content.cloneNode(true);

    clone.querySelector('.averageTemp').textContent = Math.round(averageTemp) + "°C";
    clone.querySelector('.minTemp').textContent = Math.round(minTemp) + "°C";
    clone.querySelector('.maxTemp').textContent = Math.round(maxTemp) + "°C";
    clone.querySelector('.humidity').textContent = Math.round(averageHumidity) + "%";

    document.getElementById('forecastTarget').appendChild(clone);
}


const rememberCheck = document.getElementById("rememberMe"),
    cityInput = document.getElementById("cityName");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rememberCheck.setAttribute("checked", "checked");
    cityInput.value = localStorage.city;
} else {
    rememberCheck.removeAttribute("checked");
    cityInput.value = "";
}


function lsRememberMe() {
    if (rememberCheck.checked && cityInput.value !== "") {
        localStorage.city = cityInput.value;
        localStorage.checkbox = rememberCheck.value;
    } else {
        localStorage.city = "";
        localStorage.checkbox = "";
    }
}

function runForecast() {
    document.getElementById("forecastTarget").innerHTML = "";
    // reset html

    const cityName = document.getElementById("cityName").value;

    lsRememberMe();


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=d558391af4161e2ee2e747ad0ce49859&units=metric`)
        .then(
            response => response.json())
        .then(
            allForecastData => {
                for (let i = 0; i < 5; i++) {
                    const sliceStart = 8 * i;
                    const sliceEnd = sliceStart + 8;
                    const day = allForecastData.list.slice(sliceStart, sliceEnd)
                    displayDailyValues(day);
                }
            })
}
