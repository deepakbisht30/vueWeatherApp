<template>
  <div>
    <div
      v-if="weatherDetails != '' && weatherDetails != undefined"
      class="card"
    >
      <h4>{{ getDate() }}</h4>
      <img :src="imgSrc" class="center-img" />
      <div class="card-body">
        <h1 class="card-title">
          {{ getWeatherCityName() }} Current Weather:
          {{ weatherDetails.weather[0].main }}
        </h1>
      </div>
      <table class="table table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>Actual Temp:</td>
            <td>
              {{ weatherDetails.main.temp }}
              &deg;C
            </td>
            <td>But Feels Like:</td>
            <td>{{ weatherDetails.main.feels_like }} &deg;C</td>
          </tr>
          <tr>
            <td>Min. Temp:</td>
            <td>{{ weatherDetails.main.temp_min }} &deg;C</td>
            <td>Max. Temp:</td>
            <td>{{ weatherDetails.main.temp_max }} &deg;C</td>
          </tr>
          <tr>
            <td>Winds:</td>
            <td>
              {{ weatherDetails.wind.speed }} kmph
              {{ weatherDetails.wind.deg }}&deg;
            </td>
            <td>Clouds:</td>
            <td>{{ weatherDetails.clouds }}</td>
          </tr>
          <tr>
            <td>Sunrise:</td>
            <td>
              {{ getLocaleTime(weatherDetails.sys.sunrise) }}
            </td>
            <td>Sunset:</td>
            <td>
              {{ getLocaleTime(weatherDetails.sys.sunset) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1 class="text-danger">
        Either You Entered Wrong City Name or You've slow speed network
      </h1>
    </div>
  </div>
</template>

<script>
import { data } from "../../shared";
export default {
  name: "CurrentWeather",
  components: {},
  data() {
    return {
      weatherDetails: "",
      imgSrc: "",
      windDirection: "",
      error: ""
    };
  },
  props: {
    cityName: {
      type: String,
      default: ""
    }
  },
  async created() {
    await this.getCityWeatherDetails();
  },
  methods: {
    async getCityWeatherDetails() {
      await data
        .getCurrentWeather(this.cityName)
        .then(weatherData => {
          this.weatherDetails = weatherData;
          this.imgSrc =
            "http://openweathermap.org/img/wn/" +
            weatherData.weather[0].icon +
            "@2x.png";
        })
        .catch(error => {
          this.error = error;
        });
    },
    getLocaleTime(data) {
      if (data != undefined && data != null) {
        var date = new Date(data);
        return date.toLocaleTimeString();
      }
    },
    getDate() {
      return new Date().toLocaleDateString();
    },
    getWeatherCityName() {
      if (this.cityName != undefined && this.cityName.indexOf(",") != -1) {
        var parts = this.cityName.split(",");
        return parts[0];
      } else {
        return this.cityName;
      }
    }
  },
  watch: {
    cityName: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (oldValue != undefined && oldValue != newValue) {
          this.weatherDetails = "";
          this.getCityWeatherDetails();
        }
      }
    }
  }
};
</script>

<style scoped>
@media (max-width: 992px) {
  .center-img {
    margin-left: 30%;
    width: 40%;
  }
}
@media (min-width: 992px) {
  .center-img {
    margin-left: 40%;
    width: 20%;
  }
}
</style>
