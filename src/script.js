function currentDateDetails() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = now.getDay();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes >= 10) {
    minutes = minutes;
  } else {
    minutes = `0${minutes}`;
  }

  let currentDate = `${days[day]} ${hour}:${minutes}`;
  let htmlTime = document.querySelector("#current-day-and-time");
  htmlTime.innerHTML = currentDate;
}

currentDateDetails();

function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  currentTemperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  searchInput = searchInput.value;
  searchCity(searchInput);
}

let searchFormElement = document.querySelector("#search-city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");
