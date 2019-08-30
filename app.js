const storage = new Storage();
// *Get Stored Location Data
const weatherLocation = storage.getLocationData();
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// *Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city, country);

  // storage.setLocation
  storage.setLocationData(city, country);
  getWeather();

  // *close modal using jquery
  $('#locmodal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);;
    })
    .catch(err => console.log(err));
}