document.getElementById('search-btn').addEventListener('click',()=>{
  const city=document.getElementById('city').value; 
  fetchWeatherInfo(city);
  console.log("city is",city);
});

const fetchWeatherInfo = async function(city){
    const apiKey='2cf1dab536692f90e78793f9ad0a8df2';
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data=await apiData.json();
    displayWeatherInfo(data);
    fetchForcastInfo(city);
    // console.log(data); 
}
async function fetchForcastInfo(city) {
  const apiKey='2cf1dab536692f90e78793f9ad0a8df2';
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  const apiData=await fetch(url);
  const data=await apiData.json();
  displayForcastInfo(data);
}

function displayWeatherInfo(data){
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.getElementById('display-city').innerHTML=`<h2>${data.name}</h2>`
  document.getElementById('temprature').innerHTML=` <img src="${iconUrl}" alt="${data.weather[0].description}">
  <p>Temperature:${data.main.temp}</p>`
  document.getElementById('weather').innerHTML=`<p>Condition: ${data.weather[0].description}</p>`;
}

function displayForcastInfo(data){
  const forecastInfo=document.getElementById('forcast-info');
  forecastInfo.innerHTML='';
  // console.log(data);
  for(let i=0;i<data.list.length;i+=8){
  const forecast=data.list[i];
  const date=new Date(forecast.dt*1000);
  const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
  forecastInfo.innerHTML+=`
   <div class="forecast-item">
    <p>${date.toDateString().slice(0, 3)}</p>
    <img src="${iconUrl}" alt="${forecast.weather[0].description}">
    <p>${forecast.main.temp} °C</p>
    <p>${forecast.weather[0].description}</p>
     </div>`;
    }
}

function expanded(){
  const container =document.getElementById('container');
  container.classList.add('expanded');
}
