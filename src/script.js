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
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  currentTemperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src=${response.data.condition.icon_url} class="current-temperature-icon" /></span
              >`;

  getForecast(response.data.city);
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

function getForecast(city) {
  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function displayForecast(response) {
  console.log(response.data);

  forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="weather-forecast">
  <div class="weather-forecast-day">
  <div class="forecast-day">${formatDay(day.time)}</div>
  
  <img src="${day.condition.icon_url}" class="forecast-emoji" />
 
  <div class="forecast-temperatures">
  <div class="forecast-temperature"><strong>${Math.round(
    day.temperature.maximum
  )}°</strong></div>
  <div class="forecast-temperature">${Math.round(
    day.temperature.minimum
  )}°</div>
  </div>
  </div>
  </div>`;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

let searchFormElement = document.querySelector("#search-city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");
