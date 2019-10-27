<template>
  <div id="app">
		<TopNav></TopNav>
		<router-view></router-view>
<!--	  <Footer></Footer>-->
	</div>
</template>
<script>
  import TopNav from './TopNav/TopNav.vue'
  import Footer from './Footer/Footer.vue'
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      TopNav,
      Footer
    },
  }
</script>
<style>
	body {
		background: #f4f4f4 !important;
	}
</style>
