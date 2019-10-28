<template>
	<div class="contact-us-component">
		<div class="entry-button">
			<Icon class="icon" type="ios-chatbubbles-outline" />
			<span>联系我们</span>
		</div>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "ContactUsComponent",
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
	.contact-us-component {
		display: inline-block;
		position: fixed;
		right: 15px;
		bottom: 198px!important;
		z-index: 999;
		padding-left: 10px;
	}
	.contact-us-component .entry-button {
		text-decoration: none!important;
		width: 44px;
		height: 128px;
		box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
		background-color: #fff;
		text-align: center;
		display: inline-block;
		cursor: pointer;
	}
	.contact-us-component .entry-button span {
		display: inline-block;
		width: 14px;
		font-size: 14px;
		color: #ff6a00;
		line-height: 17px;
		text-decoration: none;
	}
	.contact-us-component .entry-button .icon {
		color: #ff6a00;
		display: block;
		margin: 15px auto 10px;
		font-size: 34px;
		text-align: center;
		line-height: 22px;
	}
</style>
