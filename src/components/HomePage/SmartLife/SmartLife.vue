<template>

	<div class="smart-life-body">
		<div class="smart-life-content">
			<div class="smart-life-left">
				<div class="title">
					<p>智慧生活馆</p>
				</div>
				<div class="description">
					<p>智能科技新品惊艳来袭，让科技走进生活，打造智慧生活新体验</p>
				</div>
			</div>
			<div class="smart-life-right">
				<div class="technology-product" v-for="(value, key) in SmartLifeInfo" :key="key">

					<img class="photo" :src="require('../../../assets/HomePage/'+value.img)">
					<div class="title">{{ value.title }}</div>
					<div class="description">{{ value.description }}</div>
					<div class="feature-body">
						<div class="feature" v-for="(featureValue, key) in value.feature" :key="key">
							<Icon class="icon" type="md-checkmark" size="14" /><span>{{ featureValue }}</span>
						</div>
					</div>
					<div class="money">
						<span class="symbol">¥</span>
						<span class="data">{{ value.money }}</span>
						<span>起</span>>
					</div>
					<div class="bottom-button">
						<a>立即购买</a>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {SmartLifeInfo} from './SmartLife'
  export default {
    name: "HotProduct",
    data() {
      return {
        SmartLifeInfo: SmartLifeInfo
      }
    },
    components: {

    },
  }
</script>
<style>
	.smart-life-body {
		width: 1200px;
		margin: 0 auto !important;
	}
	.smart-life-content {
		height: 413px;
		margin-top: 20px;
	}
	.smart-life-left {
		width: 300px;
		height: 413px;
		float: left;
		padding-left: 30px;
		padding-top: 30px;
		padding-right: 30px;
		background: url('../../../assets/HomePage/left-background-3.png') center center / cover no-repeat;;
	}
	.smart-life-left .title p {
		display: inline-block;
		width: 240px;
		color: #fff;
		font-size: 18px !important;
		height: 28px;
		line-height: 28px;
		font-weight: 700;
	}
	.smart-life-left .description {
		margin-top: 8px;
	}
	.smart-life-left .description p {
		display: inline-block;
		font-size: 14px!important;
		color: #fff;
		line-height: 24px;
		font-weight: 400;
	}
	.smart-life-right {
		width: 900px;
		height: 413px;
		float: left;
		background: #ffffff;
	}
	.smart-life-right .technology-product {
		border-bottom: 1px solid #ededed;
		border-right: 1px solid #ededed;
		float: left;
		width: 300px;
		height: 413px;
		position: relative;
	}
	.smart-life-right .technology-product:hover {
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: box-shadow .3s ease-out;
		position: relative
	}
	.technology-product .photo {
		width: 299px;
		height: 220px;
	}
	.technology-product .title {
		margin: 0 20px;
		text-align: justify;
		line-height: 30px;
		font-size: 14px;
		color: #181818;
		letter-spacing: 0;
	}
	.technology-product .description {
		margin: 0 20px;
		height: 36px;
		text-align: justify;
		line-height: 18px;
		font-size: 12px;
		color: #999;
		letter-spacing: 0;
	}
	.technology-product .feature-body {
		margin-top: 7px;
		padding: 0 20px;
	}
	.technology-product .feature-body .feature{
		width: 128px;
		display: inline-block;
	}
	.technology-product .feature-body .feature span {
		color: #181818;
		font-size: 12px;
	}
	.technology-product .feature-body .feature .icon {
		color: rgb(255, 106, 0);
		margin-right: 8px;
	}
	.technology-product .money {
		margin-left: 20px;
		margin-top: 16px;
	}
	.technology-product .money span {
		text-align: left;
		font-size: 14px;
		color: #181818;
		letter-spacing: .81px;
		line-height: 24px;
		height: 24px;
	}
	.technology-product .money .symbol {
		color: #ff6a00;
		line-height: 26px;
	}
	.technology-product .money .data {
		text-align: left;
		font-size: 20px;
		color: #ff6a00;
		letter-spacing: .81px;
		line-height: 26px;
		height: 26px;
	}
	.technology-product .money .originMoney {
		display: block;
		font-size: 12px;
		color: #999;
		text-decoration: line-through;
	}
	.technology-product .bottom-button {
		transition: all .3s;
		display: none;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 60px;
		padding-left: 0;
		background-color: #ff6a00;
		text-align: center;
		line-height: 60px;
		clear: both;
	}
	.technology-product .bottom-button a {
		text-decoration: none;
		float: right;
		text-align: center;
		font-size: 16px;
		color: #fff;
		letter-spacing: .65px;
		width: 100%;
		position: relative;
		z-index: 1;
		transition: all .3s;
	}
	.technology-product:hover .bottom-button {
		display: inline-block;
	}
</style>
