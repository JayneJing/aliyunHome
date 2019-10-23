<template>
    <div id="app">
        {{text}}
        <router-view></router-view>
    </div>

</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        text: '249'
      }
    }
  }
</script>
<style></style>
