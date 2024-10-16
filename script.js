const apiKey = "53ebeb56216755f71dca8f67d1ec6cf0";
const apiUrl =
  // "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&&units=metric";
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   var data = await response.json();
//   console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// }
// checkWeather();
const searchBox = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container i");
// const weatherIcon = document.querySelector(".weather-icon");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = " images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// checkWeather();
// fetchData();

// async function fetchData() {
//     try {

//         const pokemonName = document.getElementById("pokemonName").value.to
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     if (!response.ok) {
//       throw new Error("could not fetch resource");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }/
