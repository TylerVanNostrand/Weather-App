  var zipValue;
  var cityValue;
  var tempValue; 
  var tempFValue;
  var tempCValue
  var conditionValue;
  // variables for data

const axios = require('axios');

function getWeather()   {
    zipValue = document.getElementById('zip').value;
axios.get('api.openweathermap.org/data/2.5/weather?zip=40515,us&appid=ae408ca0fc0a06a1700b29d9d60fd061')
  .then(function (response) {
    cityValue = response.data.name;
    tempValue = Math.round(response.data.main.temp)
    tempFValue = Math.round((tempValue-273.15)*(9/5)+32);
    tempCValue = Math.round(tempValue-273.15);
    conditionValue = response.data.weather[0].description
    console.log(response);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
    
  });

}