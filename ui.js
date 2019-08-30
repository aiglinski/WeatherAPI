class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.bar = document.getElementById('w-bar');
        this.wind = document.getElementById('w-wind');
    }



    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        var kel = weather.main.temp;
        var far = (kel - 273.15) * 1.8 + 32
        this.temp.textContent = Math.round(far) + '\xB0';
        this.humidity.textContent = `Realtive Humidity: ${weather.main.humidity}%`;
        this.bar.textContent = `Barometric Pressure: ${weather.main.pressure} Bar`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    }
}