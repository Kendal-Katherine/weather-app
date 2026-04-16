import { getWeatherByCity } from "./weatherService";
import * as weatherApi from "../api/weatherApi";
import * as geoApi from "../api/geocodingApi";

jest.mock("../api/weatherApi");
jest.mock("../api/geocodingApi");

describe("getWeatherByCity", () => {
  describe("success cases", () => {
    it("should return weather data for a city", async () => {
      (geoApi.fetchCoordinates as jest.Mock).mockResolvedValue({
        latitude: -23.55,
        longitude: -46.63,
        name: "São Paulo",
        country: "Brazil"
      });

      (weatherApi.fetchWeather as jest.Mock).mockResolvedValue({
        current_weather: {
          temperature: 30,
          windspeed: 15
        }
      });

      const result = await getWeatherByCity("São Paulo");

      expect(result).toEqual({
        city: "São Paulo",
        country: "Brazil",
        temperature: 30,
        windspeed: 15
      });
    });


  });
  describe("error cases", () => {
    it("should throw error when city is not found", async () => {
      (geoApi.fetchCoordinates as jest.Mock).mockResolvedValue({
        results: []
      });

      await expect(getWeatherByCity("X")).rejects.toThrow("City not found");
    });

    it("should throw error if geocoding API fails", async () => {
  (geoApi.fetchCoordinates as jest.Mock).mockRejectedValue(
    new Error("API error")
  );

  await expect(getWeatherByCity("São Paulo")).rejects.toThrow("API error");
});

it("should throw error if weather API fails", async () => {
  (geoApi.fetchCoordinates as jest.Mock).mockResolvedValue({
    latitude: 1,
    longitude: 1
  });

  (weatherApi.fetchWeather as jest.Mock).mockRejectedValue(
    new Error("Weather API error")
  );

  await expect(getWeatherByCity("São Paulo")).rejects.toThrow("Weather API error");
});

it("should handle missing weather data", async () => {
  (geoApi.fetchCoordinates as jest.Mock).mockResolvedValue({
    latitude: 1,
    longitude: 1
  });

  (weatherApi.fetchWeather as jest.Mock).mockResolvedValue({});

  await expect(getWeatherByCity("São Paulo")).rejects.toThrow();
});

it("should throw error when city is empty", async () => {
  await expect(getWeatherByCity("")).rejects.toThrow("City is required");
});
  });
  describe("edge cases", () => { });




});