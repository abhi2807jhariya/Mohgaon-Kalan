const apiKey = "047bd43711b52616e1c13f1901f54ce2";
const lat = 22.647735;
const lon = 79.597123;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=hi`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Weather data loaded:", data);
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("condition").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = data.main.humidity;
  })
  .catch(error => {
    console.error("Weather load failed:", error);
    document.getElementById("weather-footer").innerHTML = "<p>मौसम डेटा लोड नहीं हो पाया</p>";
  });
