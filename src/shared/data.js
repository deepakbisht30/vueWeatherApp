import * as axios from "axios";

const APIKEY = "&appid=f1810dc3e787673cf6c2aa87d401edb9";
const currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const forecastData = "https://api.openweathermap.org/data/2.5/forecast?q=";
const metric = "&units=metric";
const getCityFutureWeather = async function(cityName) {
  const response = await axios.get(forecastData + cityName + metric + APIKEY);
  const weatherDetail = response.data;
  return weatherDetail;
};
const getCurrentWeather = async function(cityName) {
  const response = await axios.get(currentWeather + cityName + metric + APIKEY);
  const weatherDetail = response.data;
  return weatherDetail;
};
export const data = {
  getCurrentWeather,
  getCityFutureWeather
};
