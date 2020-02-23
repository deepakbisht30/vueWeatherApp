<template>
  <nav class="navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Weather App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <NavLinks />
  </nav>
</template>
<script>
import NavLinks from "@/components/nav-links";
export default {
  name: "NavBar",
  components: { NavLinks }
};
</script>
