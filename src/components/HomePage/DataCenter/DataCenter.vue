<template>
	<div class="data-center-component">
		<div class="data-center-body">
			<div class="data-center-top">
				<div class="text">
					<div class="title">遍布全球的数据中心,</div>
					<div class="title">让跨域体验更流畅</div>
					<div class="subTitle">无论是硅谷核心区，还是迪拜贸易枢纽区，全球无缝覆盖，提供CN2高速网络，BGP接入支持</div>
					<a>了解全球数据中心<Icon type="md-arrow-forward" /></a>
				</div>
			</div>
			<div class="data-center-img">
				<img src="../../../assets/HomePage/data-center.jpg">
			</div>
		</div>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "DataCenter",
    data() {
      return {
      }
    },
    created(){
    },
    mounted(){
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
	.data-center-component {
		background-color: rgb(24, 24, 24);
	}
	.data-center-body {
		margin-right: auto;
		margin-left: auto;
		width: 1200px;
		height: 600px;
		position: relative;
	}
	.data-center-top {
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 56px;
		box-sizing: border-box;
		clear: both;
	}
	.data-center-top .text {
		display: inline-block;
		max-width: 360px;
	}
	.data-center-top .text .title {
		text-align: left;
		line-height: 42px;
		font-size: 24px;
		color: #fff;
		letter-spacing: .5px;
	}
	.data-center-top .text .subTitle {
		line-height: 30px;
		font-size: 16px;
		color: gray;
		letter-spacing: 1.14px;
		margin-top: 25px;
	}
	.data-center-top .text a {
		display: block;
		text-decoration: none;
		text-align: left;
		line-height: 22px;
		font-size: 16px;
		color: #fe6a00;
		margin-top: 25px;
	}
	.data-center-img {
		background-image: linear-gradient(180deg,hsla(0,0%,6%,0) 56%,rgba(25,25,25,.7));
		width: 100%;
		height: 300px;
		position: absolute;
		bottom: 0;
	}
	.data-center-img img {
		display: block;
		width: 1440px;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
	}
</style>
