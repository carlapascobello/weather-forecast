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

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  searchInput = searchInput.value;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput;
}

let searchFormElement = document.querySelector("#search-city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
