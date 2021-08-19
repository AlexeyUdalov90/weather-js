'use strict'

fetch('http://api.openweathermap.org/data/2.5/weather?id=472757&appid=dcb827e237f5f1a3c296d1c3322ba770')
  .then(
    function (response) {
      return response.json()
    }
  )
  .then(
    function (data) {
      console.log(data)
      document.querySelector('.test__api-city').innerHTML = data.name;
      document.querySelector('.test__api-degree').innerHTML = Math.round(data.main.temp - 273);
      document.querySelector('.test__api-weather').innerHTML = data.weather[0].main;
    }
  )