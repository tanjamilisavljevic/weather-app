document.getElementById("run").addEventListener("click", runForecast);
document.getElementById('cityName').addEventListener('keypress', function (e) {
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
    document.getElementById("forecastTarget").innerHTML = "";
    // reset html

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

                let firstDayMinTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp_min);
                let firstDayMaxTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp_max);

                // make object array into array of numbers
                let minTempFirstDay = Math.min(...firstDayMinTemps);
                let maxTempFirstDay = Math.max(...firstDayMaxTemps);

                let firstDayTemps = firstDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const firstDayAverageTemp = getAverageTemp(firstDayTemps);

                let firstDayHumidities = firstDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const firstDayAverageHumidity = getAverageHumidity(firstDayHumidities);

                let template = document.getElementById("forecastTemplate");
                let clone = template.content.cloneNode(true);

                clone.querySelector('.averageTemp').textContent = Math.round(firstDayAverageTemp);
                clone.querySelector('.minTemp').textContent =  Math.round(minTempFirstDay);
                clone.querySelector('.maxTemp').textContent =  Math.round(maxTempFirstDay);
                clone.querySelector('.humidity').textContent =  Math.round(firstDayAverageHumidity);

                document.getElementById('forecastTarget').appendChild(clone);


                secondDay = allForecastData.list.slice(8, 16);
                let secondDayMinTemps = secondDay.map((threeHourWeather) => threeHourWeather.main.temp_min);
                let secondDayMaxTemps = secondDay.map((threeHourWeather) => threeHourWeather.main.temp_max);

                // make object array into array of numbers
                let minTempSecondDay = Math.min(...secondDayMinTemps);
                let maxTempSecondDay = Math.max(...secondDayMaxTemps);

                let secondDayTemps = secondDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const secondDayAverageTemp = getAverageTemp(secondDayTemps);

                let secondDayHumidities = secondDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const secondDayAverageHumidity = getAverageHumidity(secondDayHumidities);

                let clone2 = template.content.cloneNode(true);


                clone2.querySelector('.averageTemp').textContent =  Math.round(secondDayAverageTemp);
                clone2.querySelector('.minTemp').textContent =  Math.round(minTempSecondDay);
                clone2.querySelector('.maxTemp').textContent =  Math.round(maxTempSecondDay);
                clone2.querySelector('.humidity').textContent =  Math.round(secondDayAverageHumidity);

                document.getElementById('forecastTarget').appendChild(clone2);




                thirdDay = allForecastData.list.slice(16, 24);
                let thirdDayMinTemps = thirdDay.map((threeHourWeather) => threeHourWeather.main.temp_min);
                let thirdDayMaxTemps = thirdDay.map((threeHourWeather) => threeHourWeather.main.temp_max);

                // make object array into array of numbers
                let minTempThirdDay = Math.min(...thirdDayMinTemps);
                let maxTempThirdDay = Math.max(...thirdDayMaxTemps);

                let thirdDayTemps = thirdDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const thirdDayAverageTemp = getAverageTemp(thirdDayTemps);

                let thirdDayHumidities = thirdDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const thirdDayAverageHumidity = getAverageHumidity(thirdDayHumidities);

                let clone3 = template.content.cloneNode(true);


                clone3.querySelector('.averageTemp').textContent =  Math.round(thirdDayAverageTemp);
                clone3.querySelector('.minTemp').textContent =  Math.round(minTempThirdDay);
                clone3.querySelector('.maxTemp').textContent =  Math.round(maxTempThirdDay);
                clone3.querySelector('.humidity').textContent =  Math.round(thirdDayAverageHumidity);

                document.getElementById('forecastTarget').appendChild(clone3);

                fourthDay = allForecastData.list.slice(24, 32);
                let fourthDayMinTemps = fourthDay.map((threeHourWeather) => threeHourWeather.main.temp_min);
                let fourthDayMaxTemps = fourthDay.map((threeHourWeather) => threeHourWeather.main.temp_max);

                // make object array into array of numbers
                let minTempFourthDay = Math.min(...fourthDayMinTemps);
                let maxTempFourthDay = Math.max(...fourthDayMaxTemps);

                let fourthDayTemps = fourthDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const fourthDayAverageTemp = getAverageTemp(fourthDayTemps);

                let fourthDayHumidities = fourthDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const fourthDayAverageHumidity = getAverageHumidity(fourthDayHumidities);

                let clone4 = template.content.cloneNode(true);


                clone4.querySelector('.averageTemp').textContent =  Math.round(fourthDayAverageTemp);
                clone4.querySelector('.minTemp').textContent =  Math.round(minTempFourthDay);
                clone4.querySelector('.maxTemp').textContent =  Math.round(maxTempFourthDay);
                clone4.querySelector('.humidity').textContent =  Math.round(fourthDayAverageHumidity);

                document.getElementById('forecastTarget').appendChild(clone4);

                fifthDay = allForecastData.list.slice(32, 40);
                let fifthDayMinTemps = fifthDay.map((threeHourWeather) => threeHourWeather.main.temp_min);
                let fifthDayMaxTemps = fifthDay.map((threeHourWeather) => threeHourWeather.main.temp_max);

                // make object array into array of numbers
                let minTempFifthDay = Math.min(...fifthDayMinTemps);
                let maxTempFifthDay = Math.max(...fifthDayMaxTemps);

                let fifthDayTemps = fifthDay.map((threeHourWeather) => threeHourWeather.main.temp)
                const fifthDayAverageTemp = getAverageTemp(fifthDayTemps);

                let fifthDayHumidities = fifthDay.map((threeHourWeather) => threeHourWeather.main.humidity)
                const fifthDayAverageHumidity = getAverageHumidity(fifthDayHumidities);

                let clone5 = template.content.cloneNode(true);


                clone5.querySelector('.averageTemp').textContent =  Math.round(fifthDayAverageTemp);
                clone5.querySelector('.minTemp').textContent =  Math.round(minTempFifthDay);
                clone5.querySelector('.maxTemp').textContent =  Math.round(maxTempFifthDay);
                clone5.querySelector('.humidity').textContent =  Math.round(fifthDayAverageHumidity);

                document.getElementById('forecastTarget').appendChild(clone5);
            }
        )

}
