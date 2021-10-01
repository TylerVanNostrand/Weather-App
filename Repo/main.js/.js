

  // variables for data

function getWeather()   {

axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=40515,us&appid=ae408ca0fc0a06a1700b29d9d60fd061`)
  .then(function (response) {
      document.getElementById("message").innerText = `It is now ${response.data.main.temp}°C`
    console.log(response.data.main.temp);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("Your Forecast");
  });

}

