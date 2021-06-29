document.getElementById("run").addEventListener("click", runForecast);
document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        runForecast()
    }
});

function getAverageTemp(temps) {
    let averageTemp = 0;
    let sum = 0;
    for (let i = 0; i < temps.length; i++) {
        sum = sum + temps[i];
    }
    averageTemp = sum / temps.length;
    return averageTemp;
}

function getAverageHumidity(humidities) {
    let averageHumidity = 0;
    let sum = 0;
    for (let i = 0; i < humidities.length; i++) {
        sum = sum + humidities[i];
    }
    averageHumidity = sum / humidities.length;
    return averageHumidity;
}

function runForecast() {
    const cityName = document.getElementById("cityName").value;

    let firstDay;
    let secondDay;
    let thirdDay;
    let fourthDay;
    let fifthDay;


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=d558391af4161e2ee2e747ad0ce49859&units=metric`)
        .then(
            function (response) {
                return response.json();
            })
        .then(
            function (allForecastData) {
                firstDay = allForecastData.list.slice(0, 8);

                let firstDayMinTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp_min)
                let firstDayMaxTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp_max)

                // make object array into array of numbers
                let minTempFirstDay = Math.min(...firstDayMinTemps);
                let maxTempFirstDay = Math.max(...firstDayMaxTemps);

                let firstDayTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const firstDayAverageTemp = getAverageTemp(firstDayTemps);

                let firstDayHumidities = firstDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const firstDayAverageHumidity = getAverageHumidity(firstDayHumidities);

                let template = document.getElementById("forecastTemplate");
                let clone = template.content.cloneNode(true);

                clone.querySelector('.averageTemp').textContent = firstDayAverageTemp;
                clone.querySelector('.minTemp').textContent = minTempFirstDay;
                clone.querySelector('.maxTemp').textContent = maxTempFirstDay;
                clone.querySelector('.humidity').textContent = firstDayAverageHumidity;

                document.getElementById('forecastTarget').appendChild(clone);


                secondDay = allForecastData.list.slice(8, 16);


                thirdDay = allForecastData.list.slice(16, 24);


                fourthDay = allForecastData.list.slice(24, 32);


                fifthDay = allForecastData.list.slice(32, 40);

            }
        )

}

// const template = document.getElementById("template");
// const clone = template.content.cloneNode(true);
//
// clone.querySelector('.name').textContent = hero.name;
// clone.querySelector('.alter-ego').textContent = hero.alterEgo;
// clone.querySelector('.powers').textContent = hero.abilities;
//
// document.getElementById('target').appendChild(clone);