
const API_KEY = 'bf086de63f851b22c68285151da76bea';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    
    const cityInput = document.getElementById('cityInput');
    const errorEl = document.getElementById('error');
    const weatherInfoEl = document.getElementById('weatherInfo');
    const city = cityInput.value.trim();
    
    errorEl.style.display = 'none';
    weatherInfoEl.style.display = 'none';
    
    if (city === '') {
        errorEl.textContent = 'Введите название города';
        errorEl.style.display = 'block';
        return;
    }
    const url = BASE_URL + '?q=' + city + '&appid=' + API_KEY + '&units=metric&lang=ru';
    
    fetch(url)
        .then(function(response) {
            if (response.status === 404) {
                errorEl.textContent = 'Город не найден';
                errorEl.style.display = 'block';
                return;
            }
            return response.json();
        })
        .then(function(data) {
            if (data) {
                showWeather(data);
            }
        });
}

function showWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    const temp = Math.round(data.main.temp);
    document.getElementById('temp').textContent = temp + '°C';
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('wind').textContent = data.wind.speed + ' м/с';
    const feelsLike = Math.round(data.main.feels_like);
    document.getElementById('feels').textContent = feelsLike + '°C';
    document.getElementById('weatherInfo').style.display = 'block';
}

document.getElementById('searchBtn').addEventListener('click', getWeather);
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});