


document.getElementById("run").addEventListener("click", runForecast);
document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        runForecast()
    }
});

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
                console.log(firstDay);
                secondDay = allForecastData.list.slice(8, 16);
                console.log(secondDay);
                thirdDay = allForecastData.list.slice(16, 24);
                console.log(thirdDay);
                fourthDay = allForecastData.list.slice(24, 32);
                console.log(fourthDay);
                fifthDay = allForecastData.list.slice(32, 40);
                console.log(fifthDay);
            }
        )

}