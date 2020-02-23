<template>
  <div class="form-group row mt-5 sticky-top">
    <label for="searchbox" class="mt-1 h1 ml-2">Weather Search</label>
    <div class="col-sm-10">
      <input
        class="form-control"
        id="searchbox"
        type="text"
        placeholder="Type a valid city name"
        v-model="searchQuery"
        @keypress="bindEnterKey($event)"
      />
      <button
        class="btn btn-outline-primary btn-info text-light form-control mt-2"
        @click="updateFinalQuery"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  components: {},
  data() {
    return {
      searchQuery: "",
      finalQuery: ""
    };
  },
  methods: {
    updateFinalQuery() {
      this.finalQuery = this.searchQuery;
      this.$emit("findWeatherForCity", this.finalQuery);
    },
    bindEnterKey(data) {
      if (data.key == "Enter") {
        this.updateFinalQuery();
      }
    }
  }
};
</script>

<style></style>
