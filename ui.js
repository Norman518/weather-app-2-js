class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('w-country');
    this.desc = document.getElementById('w-desc');

    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');

    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
    this.country.textContent =  `${weather.location.country}`;
    this.desc.textContent = weather.current.condition.text;

    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_f} F`;

    this.wind.textContent = `Wind: ${weather.current.wind_mph} MPH`;
  }
}