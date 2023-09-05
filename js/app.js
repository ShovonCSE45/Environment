const API_KEY = `9b79436e4b143ab4b146dd8c7c7fe637`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const displayTemperature = data => {
    const temparature = document.getElementById("Temperature");
    temparature.innerText = data.main.temp;
     console.log(data);

    // setting environment
    const environment = document.getElementById("environment");
    environment.innerText = data.weather[0].main;

}

// Search fields activities
document.getElementById("searchButton").addEventListener("click", function () {
    const searchField = document.getElementById("searchField");
    const city = searchField.value;
    loadTemperature(city);

    document.getElementById("city").innerText = city;

})

loadTemperature("dhaka");