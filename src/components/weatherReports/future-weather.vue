<template>
  <div>
    <div
      class="container-right row"
      v-if="weatherList.length > 0 && weatherForecast != undefined"
    >
      <div class="col-md-3" v-for="item in filteredList" :key="item.id">
        <CardViewWeather :weatherData="item" />
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { data } from "../../shared";
import CardViewWeather from "@/components/weatherReports/card-view-weather";
export default {
  name: "FutureWeather",
  components: {
    CardViewWeather
  },
  data() {
    return {
      weatherForecast: "",
      weatherList: [],
      filteredList: [],
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
    await this.getWeatherForecast();
  },
  methods: {
    async getWeatherForecast() {
      await data
        .getCityFutureWeather(this.cityName)
        .then(data => {
          this.weatherForecast = data;
          this.weatherList = data.list.slice(7);
          for (let i = 0; i < this.weatherList.length - 1; i = i + 8) {
            this.filteredList.push(this.weatherList[i]);
          }
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  watch: {
    cityName: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (oldValue != undefined && oldValue != newValue) {
          this.filteredList = [];
          this.getWeatherForecast();
        }
      }
    }
  }
};
</script>

<style scoped>
.container-right {
  right: 10%;
}
</style>
