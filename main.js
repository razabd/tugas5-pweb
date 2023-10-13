const apiKey = "ecc8224c003e55860c4fc1022a8a8adb"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=surabaya&units=metric"

async function checkWeather() {
  const response = await fetch(`${apiURL}&appid=${apiKey}`)
  var data = await response.json()

  console.log(data)

  document.getElementById('city_name').innerHTML = data.name
  document.getElementById('city_temp').innerHTML = '<b>' + data.main.temp + '</b>'  + '℃'
  document.getElementById('city_weather').innerHTML = data.weather[0].main
  document.getElementById('city_humidity').innerHTML = 'Humidity: '  + data.main.humidity + '%'
  document.getElementById('city_windspeed').innerHTML = 'Wind Speed: '  + data.wind.speed + 'm/s'
  document.getElementById('city_tempfeelslike').innerHTML = 'Temp feels like: '  + data.main.feels_like + '℃'

  var img = document.getElementById('weather_image')

  if (data.weather[0].main == "Clouds")
  {
    img.src = 'img/clouds.png'
  }
  else if (data.weather[0].main == "Thunderstorm")
  {
    img.src = 'img/thunderstorm.png'
  }
  else if (data.weather[0].main == "Atmosphere")
  {
    img.src = 'img/atmosphere.png'
  }
  else if (data.weather[0].main == "Drizzle")
  {
    img.src = 'img/drizzle.png'
  }
  else if (data.weather[0].main == "Rain")
  {
    img.src = 'img/rain.png'
  }
  else {
    img.src = ''
  }
}

checkWeather()
