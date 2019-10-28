<template>
	<div>
		<NavigationAndCarousel></NavigationAndCarousel>
		<CompanyApplication></CompanyApplication>
		<HotProduct></HotProduct>
		<SmartLife></SmartLife>
		<BestPractice></BestPractice>
		<SafetyComponent></SafetyComponent>
		<DataCenter></DataCenter>
	</div>
</template>
<script>
  import NavigationAndCarousel from './NavigationAndCarousel/NavigationAndCarousel.vue'
  import CompanyApplication from './CompanyApplication/CompanyApplication.vue'
  import HotProduct from './HotProduct/HotProduct.vue'
  import SmartLife from './SmartLife/SmartLife.vue'
  import BestPractice from './BestPractice/BestPractice.vue'
  import SafetyComponent from './SafetyComponent/SafetyComponent.vue'
  import DataCenter from './DataCenter/DataCenter.vue'
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
      BestPractice,
      SafetyComponent,
      DataCenter
    },
  }
</script>
<style></style>
