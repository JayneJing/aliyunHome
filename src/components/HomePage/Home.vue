<template>
	<div>
		<NavigationAndCarousel></NavigationAndCarousel>
		<CompanyApplication></CompanyApplication>
	</div>
</template>
<script>
  import NavigationAndCarousel from './NavigationAndCarousel/NavigationAndCarousel.vue'
  import CompanyApplication from './CompanyApplication/CompanyApplication.vue'
  export default {
    name: "home",
    data() {
      return {
      }
    },
    components: {
      CompanyApplication,
      NavigationAndCarousel,
    },
  }
</script>
<style></style>
