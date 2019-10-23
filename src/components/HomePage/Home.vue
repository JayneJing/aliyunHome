<template>
	<div>{{TopNavTitle}}</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "home",
    data() {
      return {
      }
    },
    created(){
      this.getTopNavTitle()
    },
    mounted(){
    },
    computed: {
      ...mapState({
        TopNavTitle: state => state.HomePage.TopNavTitle,
      })
    },
    methods: {
      getTopNavTitle() {
        this.$store.dispatch('getTopNavTitle')
      },
    }
  }
</script>
<style></style>
