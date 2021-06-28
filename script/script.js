

document.getElementById("run").addEventListener("click", function () {
    const cityName = document.getElementById("cityName").value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=d558391af4161e2ee2e747ad0ce49859`)
        .then(
            function (response) {
                return response.json();
            }
        )


})
