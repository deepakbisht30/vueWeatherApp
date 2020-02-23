<template>
  <div class="col-sm-12">
    <div class="card">
      <CurrentWeather :cityName="cityName" />
    </div>
    <div>
      <FutureWeather :cityName="cityName" />
    </div>
  </div>
</template>

<script>
import CurrentWeather from "@/components/weatherReports/current-weather";
import FutureWeather from "@/components/weatherReports/future-weather";
export default {
  name: "WeatherDisplay",
  components: { CurrentWeather, FutureWeather },
  props: {
    cityName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
