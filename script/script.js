import {displayDailyValues} from './displayDailyValues.js';
import {lsRememberMe} from './rememberMe.js';

document.getElementById("run").addEventListener("click", runForecast);
document.getElementById('cityName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        runForecast()
    }
});

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
