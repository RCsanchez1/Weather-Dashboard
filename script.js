let cities = ["Boston", "Philadelphia", "Detroit", "San Francisco"];
let apiKey = "c94ac49bcd423ef700d020797840e0c4";
let lat = "latitude";
let lon = "longitude";
let uvIndex = (lat + lon)

cities.forEach(function (city, index, originalArr) {
    renderButtons(city);

    if (index === originalArr.length - 1) {
        displayWeatherInfo(city);
    }
})

function displayWeatherInfo(city) {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;

    // let queryUV = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    $.get(queryURL).then(function (response) {
        // let unIndex = response.coord.lon.lat;
        let lon = response.coord.lon;
        let lat = response.coord.lat;
        let queryUV = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;

       