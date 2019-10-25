<template>
	<div>
		<NavigationAndCarousel></NavigationAndCarousel>
		<CompanyApplication></CompanyApplication>
		<HotProduct></HotProduct>
		<SmartLife></SmartLife>
	</div>
</template>
<script>
  import NavigationAndCarousel from './NavigationAndCarousel/NavigationAndCarousel.vue'
  import CompanyApplication from './CompanyApplication/CompanyApplication.vue'
  import HotProduct from './HotProduct/HotProduct.vue'
  import SmartLife from './SmartLife/SmartLife.vue'
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
      SmartLife,
    },
  }
</script>
<style></style>
