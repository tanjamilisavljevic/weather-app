import {getAverage} from "./getAverage.js";

export function displayDailyValues(day) {
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