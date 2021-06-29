

document.getElementById("run").addEventListener("click", function () {
    const cityName = document.getElementById("cityName").value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=d558391af4161e2ee2e747ad0ce49859&units=metric`)
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(function (forecastData) {
            const first5 = forecastData.list.slice(0, 5);
            const myForecasts = first5.map(function (theirForecast){
                let myForecast = new Object()

                myForecast.minimumTemperature = theirForecast.main.temp_min
                myForecast.maximumTemperature = theirForecast.main.temp_max
                myForecast.realFeel = theirForecast.main.feels_like
                myForecast.humidity = theirForecast.main.humidity
                myForecast.weatherMain = theirForecast.weather[0].main
                return myForecast;
            });

            return myForecasts
        })
        .then(function (first5temperatures) {
            console.log(first5temperatures)

        })

    const template = document.getElementById("forecastTemplate");
    const clone = template.content.cloneNode(true);

    clone.querySelector('.minTemp').textContent = myForecast.minimumTemperature
    clone.querySelector('.maxTemp').textContent = myForecast.maximumTemperature;
    clone.querySelector('.realFeel').textContent = myForecast.realFeel;
    clone.querySelector('.humidity').textContent = myForecast.humidity;
    clone.querySelector('.weatherMain').textContent = myForecast.weatherMain;


    document.getElementById('forecastTarget').appendChild(clone);

})
