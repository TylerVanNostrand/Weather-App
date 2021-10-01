// variables for data
const description = document.getElementById('description')
const icons = document.getElementById('icons');

var cityValue;
var tempValue;
var tempFValue;
var tempCValue;
var conditionValue;
var zipValue;

button.addEventListener('click', getWeather);

function getWeather()   {
    zipValue = document.getElementById("zipSearch").value;
axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipValue},&appid=ae408ca0fc0a06a1700b29d9d60fd061`)
 
.then(function (response) {
    return response
        cityValue = response.data.name;
        tempValue = Math.round(response.data.main.temp);
        tempFValue = Math.round((tempValue-273.15)*(9/5)+32);
        tempCValue = Math.round((tempValue-273.15));
        conditionValue = response.data.weather[0].description;

        city.innerHTML = cityValue;
        tempK.innerHTML = tempValue + '°' +' K'
        tempF.innerHTML = tempFValue + '°' + ' F'
        tempC.innerHTML = tempCValue + '°' + ' C'
        condition.innerHTML = conditionValue;
            
  })
  .catch(function (error) {
    city.innerHTML= "Please enter valid Zip Code"
  })
}

