const app = function(){
  const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  // const city = 'inverurie';
  const units = '&units=metric';
  const key = '&APPID=eeafd0c4f88aa882934f01394d4d3796';
  // const url = api + city + units + key;
  // makeRequest(url, requestComplete);

  const buttonTown = document.querySelector('#select');
  buttonTown.addEventListener('click', function() {
    const town = document.getElementById('town').value;
    const url = api + town + units + key;
    makeRequest(url, requestComplete);
  });

}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const data = JSON.parse(jsonString);
  // console.log(data);
  populateWeatherList(data);
}

const populateWeatherList = function(data) {
  const weatherInfo = document.getElementById('weather-data')
  while(weatherInfo.firstChild) {
    weatherInfo.removeChild(weatherInfo.firstChild);
  }
    const town = createTown(data);
    const description = createDescription(data);
    const temp = createTemp(data);
    const wind = createWind(data);
    const time = createTime(data);
    const elements = appendElements(weatherInfo, town, description, temp, wind, time);
}

const createTown = function(data) {
  const town = document.createElement('li');
  town.innerText = 'The Weather in ' + data.name + ' is as follows:';
  return town;
}

const createDescription = function(data) {
  const description = document.createElement('li');
  description.innerText = 'Current Condition: ' + data.weather[0].description;
  return description;
}

const createTemp = function(data) {
  const temp = document.createElement('li');
  temp.innerText = 'Temperature: = ' + data.main.temp + ' deg C';
  return temp;
}

const createWind = function(data) {
  const wind = document.createElement('li');
  wind.innerText = 'Wind Speed: = ' + data.wind.speed + ' mps';
  return wind;
}

const createTime = function(data) {
 const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const date = new Date(data.dt*1000);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const convTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  const time = document.createElement('li');
  time.innerText = convTime;
  return time;
}

const appendElements = function(weatherInfo, town, description, temp, wind, time) {
  weatherInfo.appendChild(town);
  weatherInfo.appendChild(description);
  weatherInfo.appendChild(temp);
  weatherInfo.appendChild(wind);
  weatherInfo.appendChild(time);

}

document.addEventListener('DOMContentLoaded', app);
