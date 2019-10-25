<template>
	<div>
		<NavigationAndCarousel></NavigationAndCarousel>
		<CompanyApplication></CompanyApplication>
		<HotProduct></HotProduct>
		<SmartLife></SmartLife>
		<BestPractice></BestPractice>
	</div>
</template>
<script>
  import NavigationAndCarousel from './NavigationAndCarousel/NavigationAndCarousel.vue'
  import CompanyApplication from './CompanyApplication/CompanyApplication.vue'
  import HotProduct from './HotProduct/HotProduct.vue'
  import SmartLife from './SmartLife/SmartLife.vue'
  import BestPractice from './BestPractice/BestPractice.vue'
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
      BestPractice
    },
  }
</script>
<style></style>
