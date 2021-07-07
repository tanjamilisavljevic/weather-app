export function lsRememberMe() {
    if (rememberCheck.checked && cityInput.value !== "") {
        localStorage.city = cityInput.value;
        localStorage.checkbox = rememberCheck.value;
    } else {
        localStorage.city = "";
        localStorage.checkbox = "";
    }
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
