const apiKey = "53ebeb56216755f71dca8f67d1ec6cf0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&&units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}
checkWeather();
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
