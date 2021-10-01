// variables for data
const inputZip = document.getElementById("zipSearch");
const button = document.getElementById("button");
const city = document.getElementById('city');
const tempK = document.getElementById('tempK');
const tempF = document.getElementById('tempF');
const tempC = document.getElementById('tempC');
const description = document.getElementById('description')
const icons = document.getElementById('icons');

button.addEventListener('click', getWeather);
// function for our axios call
function getWeather()   {
    zipValue = document.getElementById("zipSearch").value;
axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipValue},&appid=ae408ca0fc0a06a1700b29d9d60fd061`)
 
.then(function (response) {
    return response
    // setting varriables for api
        city.innerHTML = data.name;
        tempK.innerHTML = data.main.temp + '°' +' K'
        tempF.innerHTML = Math.round((data.main.temp - 273.15) * 9 / 5 + 32) + '°' + ' F'
        tempC.innerHTML = Math.round(json.main.temp - 273.15) + '°' + ' C'
        description.innerHTML = data.weather[0].description
        icons.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';

  })    // a function for any errors
  .catch(function (error) {
    city.innerHTML= "Please enter valid Zip Code"
  })
}

