
const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    
    try {
    let city = "indore";

    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    console.log("weather data: ", data);

    renderWeatherInfo(data);
    
    }
    catch(err) {
        console.warn(err);
    }
}

async function getCustomWeather() {
    try {
      let latitude = 24.0667;
      let longitude = 75.0667;
  
      let result =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
        `);
  
      let data = await result.json();
      console.log("Weather -> ", data);
      renderWeatherInfo(data);
    } 
    catch (err) {
      console.log(err);
    }
}