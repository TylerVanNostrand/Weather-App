## What we need to accomplish
    * allow user to input a zip code and press a button to load
    * run an on click request that executes an Axios GET request to retrieve data from WeatherAPI
        * City Name
        * Current weather
        * Currnent temp in Kelvin, celcius, and farhrenheit
        * a unique image decided by the current temp
    * if request is unsuccessful, return an error message
    * allow user to continue inputting new zipcodes

## What we need to accomplish it
    * spot to input zipcode
    * button to then init the request
    * Area that populates the city associated w/ zip
    * spots for temp in K, C, F to pop
    * spot for weather condition to pop
    * spot for any other info w/ a pic associated to the weather
 ## Other tools
    * ONLY show data after the user input valid zip
    * Display an error if we can't get info f/ api

URL/weather(html)
INIT onLoad()
STATE
INIT newWeather

INIT -> set variables
call api
make sure data is clean (error message?)
State change
plug data into html
Update the view
(check data again?)
Show data