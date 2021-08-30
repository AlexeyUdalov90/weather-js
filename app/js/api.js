import axios from 'axios';

axios
  .get('http://api.openweathermap.org/data/2.5/weather' , {
    params: {
      id: '472757',
      appid: 'dcb827e237f5f1a3c296d1c3322ba770',
    },
  })
  .then(
    function (response) {
      document.querySelector('.test__api-city').innerHTML = response.data.name;
      document.querySelector('.test__api-degree').innerHTML = Math.round(response.data.main.temp - 273);
      document.querySelector('.test__api-weather').innerHTML = response.data.weather[0].main;
    }
  )