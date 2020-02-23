<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <SearchBar @findWeatherForCity="findWeather" />
        </div>
        <div class="col-sm-12 col-md-6">
          <WeatherDisplay v-if="cityName != ''" :cityName="cityName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/js/bootstrap";
import NavBar from "@/components/nav-bar";
import SearchBar from "@/components/searching/search-bar";
import WeatherDisplay from "@/components/weather-display";
export default {
  name: "app",
  components: { NavBar, SearchBar, WeatherDisplay },
  data() {
    return {
      cityName: ""
    };
  },
  methods: {
    findWeather(cityName) {
      this.cityName = cityName;
    }
  }
};
</script>
<style lang="scss">
@import "@/design/index";
</style>
