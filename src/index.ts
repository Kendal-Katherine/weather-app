import readline from "readline";
import { getWeatherByCity } from "./services/weatherService";
import { showWeather } from "./ui/display";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma ou mais cidades (separadas por vírgula): ", async (input) => {
  const cities = input.split(",").map(city => city.trim());

  for (const city of cities) {
    try {
      const weather = await getWeatherByCity(city);
      showWeather(weather);
      console.log("---------------");
    } catch (error) {
      console.log(`❌ Erro para "${city}":`, (error as Error).message);
    }
  }

  rl.close();
});