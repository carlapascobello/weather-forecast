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
  let htmlDay = document.querySelector("#current-day");
  htmlDay.innerHTML = days[day];

  let hour = now.getHours();
  let htmlHour = document.querySelector("#current-hour");
  htmlHour.innerHTML = hour;

  let minutes = now.getMinutes();
  let htmlMinutes = document.querySelector("#current-minutes");
  if (minutes >= 10) {
    htmlMinutes.innerHTML = minutes;
  } else {
    htmlMinutes.innerHTML = `0${minutes}`;
  }
}

currentDateDetails();
