class Weather {
  constructor(cityName, countryCode) {
    this.apiKey = '7948908505512835364db5e7155ed0b3';
    this.cityName = cityName;
    this.countryCode = countryCode;
  }
  // *Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryCode}&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // // *Change Location
  changeLocation(cityName, countryCode) {
    this.cityName = cityName;
    this.countryCode = countryCode;
  }
}
