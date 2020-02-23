<template>
  <div class="cell">
    <div class="card" style="width: 18rem;">
      <h4>{{getDate()}}</h4>
      <img
        class="card-img-top center-img"
        :src="getImageSrc()"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ getTitle() }}</h5>
        <p class="card-text">
            <table class="table table-responsive">
                <tbody>
                    <tr>
                         <td>Min. Temp:</td>
                         <td>{{ weatherData.main.temp_min }} &deg;C</td>
                    </tr>
                    <tr>
                         <td>Max. Temp:</td>
                         <td>{{ weatherData.main.temp_max }} &deg;C</td>
                    </tr>
                </tbody>
            </table>
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardViewWeather",
  props: {
    weatherData: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data() {
    return {
      imgSrc: ""
    };
  },
  methods: {
    getImageSrc() {
      return (
        "http://openweathermap.org/img/wn/" +
        this.weatherData.weather[0].icon +
        ".png"
      );
    },
    getTitle() {
      return this.weatherData.weather[0].main;
    },
    getDate(){
      return new Date(this.weatherData.dt_txt).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
@media (min-width: 992px) {
  .center-img {
    width: 50%;
    margin-left: 10%;
    text-align: center;
  }
  .cell {
    overflow: hidden;
  }
}
</style>
