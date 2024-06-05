const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=8.9692&units=metric&lon=125.5009&appid=826ed29adce35e3ae341a7e5fd4532c7";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=8.9692&units=metric&lon=125.5009&appid=826ed29adce35e3ae341a7e5fd4532c7";

// Function to fetch data from the API
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display current weather data in HTML
function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// Function to display forecast data in HTML
function displayForecast(data) {
  const forecastData = {};

  // Process the forecast data to get daily averages
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    if (!forecastData[date]) {
      forecastData[date] = { temp: 0, count: 0 };
    }
    forecastData[date].temp += item.main.temp;
    forecastData[date].count += 1;
  });

  // Calculate the averages and display the forecast
  const forecastHTML = Object.keys(forecastData).slice(0, 3).map(date => {
    const avgTemp = (forecastData[date].temp / forecastData[date].count).toFixed(1);
    return `<div class="forecast-day">
              <h3>${date}</h3>
              <p>${avgTemp}&deg;C</p>
            </div>`;
  }).join('');

  forecastContainer.innerHTML = forecastHTML;
}

// Fetch and display both current weather and forecast
async function fetchWeather() {
  const currentWeatherData = await apiFetch(weatherUrl);
  displayCurrentWeather(currentWeatherData);

  const forecastData = await apiFetch(forecastUrl);
  displayForecast(forecastData);
}

fetchWeather();
