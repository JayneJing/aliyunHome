<template>
  <div id="app">
		<TopNav></TopNav>
		<router-view></router-view>
	  <Footer></Footer>
	  <ContactUsComponent></ContactUsComponent>
	</div>
</template>
<script>
  import TopNav from './TopNav/TopNav.vue'
  import Footer from './Footer/Footer.vue'
  import ContactUsComponent from './ContactUsComponent/ContactUsComponent.vue'
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      TopNav,
      Footer,
      ContactUsComponent
    },
  }
</script>
<style>
	body {
		background: #f4f4f4 !important;
	}
</style>
