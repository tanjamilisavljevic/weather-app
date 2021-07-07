import {displayDailyValues} from './displayDailyValues.js';


document.getElementById("run").addEventListener("click", runForecast);
document.getElementById('cityName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        runForecast()
    }
});

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
