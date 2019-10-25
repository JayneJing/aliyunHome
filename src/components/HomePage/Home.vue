<template>
	<div>
		<NavigationAndCarousel></NavigationAndCarousel>
		<CompanyApplication></CompanyApplication>
		<HotProduct></HotProduct>
	</div>
</template>
<script>
  import NavigationAndCarousel from './NavigationAndCarousel/NavigationAndCarousel.vue'
  import CompanyApplication from './CompanyApplication/CompanyApplication.vue'
  import HotProduct from './HotProduct/HotProduct.vue'
  export default {
    name: "home",
    data() {
      return {
      }
    },
    components: {
      HotProduct,
      CompanyApplication,
      NavigationAndCarousel,
    },
  }
</script>
<style></style>
