const API_KEY = "179a7882b907267cb0cc6fc8a8c01a9a";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function geoError() {
  alert("I can't find you");
}

const weather = navigator.geolocation.getCurrentPosition(geoOk, geoError);
