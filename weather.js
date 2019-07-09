class Weather {
  constructor(city) {
    this.apiKey = "3e2ac07e6b9b4009974140121190907";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
