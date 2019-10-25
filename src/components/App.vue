<template>
  <div id="app">
		<TopNav></TopNav>
		<router-view></router-view>
	</div>
</template>
<script>
  import TopNav from './TopNav/TopNav.vue'
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      TopNav,
    },
  }
</script>
<style>
	body {
		background: #f4f4f4 !important;
	}
</style>
