export function showWeather(weather: any) {
  console.log(`🌍 ${weather.city}, ${weather.country}`);
  console.log("🌤 Clima atual:");
  console.log(`🌡 Temperatura: ${weather.temperature}°C`);
  console.log(`💨 Vento: ${weather.windspeed} km/h`);
}