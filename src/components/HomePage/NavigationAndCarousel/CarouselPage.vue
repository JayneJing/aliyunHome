<template>
	<div class="">
		<Carousel
				class="carousel-body"
				:arrow="setting.arrow"
				autoplay
				:autoplaySpeed="setting.autoplaySpeed"
				loop
				@on-change="(oldValue, value) => getItemIndex(oldValue, value)">
			<CarouselItem class="carouse-item-body" v-for="(value, key) in carouselInfo" :key="key">
				<img class="carousel-item-img" :src="require('../../../assets/' + value.img)">
					<div class="carouse-item-text">
						<h1>{{ value.title }}</h1>
						<p>{{ value.subtitle }}</p>
						<div class="carouse-item-button">查看详情<Icon type="ios-arrow-round-forward" size="16" /></div>
					</div>
			</CarouselItem>
		</Carousel>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  import {carouselInfo} from './NavAndCarouselInfo'
  export default {
    name: "CarouselPage",
    data() {
      return {
        itemIndex: 0,
        setting: {
          autoplaySpeed: 7000,
          arrow: 'never'
        },
        carouselInfo: carouselInfo
      }
    },
    created(){
    },
    mounted(){
    },
    computed: {
      ...mapState({
      })
    },
    methods: {
      getItemIndex(oldValue, value) {
				this.itemIndex = value
      }
    }
  }
</script>
<style>
	.carousel-body {
		height: 320px;
		padding-left: 0 !important;
	}
	.carouse-item-body {
		height: 320px;
	}
	.carouse-item-text {
		z-index: 200;
		top: 61px;
		left: 40px;
		position: relative;
		height: 320px;
	}
	.carouse-item-text h1 {
		font-weight: 400;
		margin: 0;
		margin-bottom: 12px !important;
		line-height: 40px;
		font-family: PingFangSC-Regular,sans-serif;
		font-size: 28px !important;
		color: #181818;
		width: 590px;
		height: 40px;
		z-index: 200;
		position: relative;
	}
	.carouse-item-text p {
		text-align: left;
		font-family: PingFangSC-Regular,sans-serif;
		font-size: 16px !important;
		color: #999;
		height: 60px;
		width: 514px;
		font-weight: 400;
		line-height: 24px;
		z-index: 200;
		position: relative;
	}
	.carouse-item-button {
		color: #ff6a00;
		border: none;
		background: transparent;
		cursor: pointer;
		margin-top: 20px;
		font-size: 16px!important;
		position: relative;
		float: left;
		height: 36px;
		line-height: 36px;
	}
	.carousel-item-img {
		position: absolute;
		height: 320px;
		z-index: 0;
	}
</style>
