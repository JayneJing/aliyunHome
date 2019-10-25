<template>

	<div class="hot-product-body">
		<div class="hot-product-title">热门产品</div>
		<div class="hot-product-content">
			<div class="hot-product-left">
				<div class="title">
					<p>云上爆款</p>
				</div>
				<div class="description">
					<p>精心挑选的热门云产品，总有一款适合你的业务形态</p>
				</div>
			</div>
			<div class="hot-product-right">
				<div class="product" v-for="(value, key) in HotProductInfo" :key="key">
					<div class="card">
						<a>{{ value.card }}</a>
					</div>
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
						<span>/{{ value.year }}年</span>
						<span class="originMoney">¥{{ value.originMoney }}</span>
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
	import {HotProductInfo} from './HotProduct'
  export default {
    name: "HotProduct",
    data() {
      return {
        HotProductInfo: HotProductInfo
      }
    },
    components: {

    },
  }
</script>
<style>
	.hot-product-body {
		width: 1200px;
		margin: 0 auto !important;
	}
	.hot-product-title {
		color: #000;
		font-size: 24px;
		font-weight: normal;
		display: block;
		margin: 20px 0;
	}
	.hot-product-content {
		height: 600px;
	}
	.hot-product-left {
		width: 300px;
		height: 600px;
		float: left;
		padding-left: 30px;
		padding-top: 30px;
		padding-right: 30px;
		background: url('../../../assets/HomePage/left-background-2.jpg') center center / cover no-repeat;;
	}
	.hot-product-left .title p {
		display: inline-block;
		width: 240px;
		color: #fff;
		font-size: 18px !important;
		height: 28px;
		line-height: 28px;
		font-weight: 700;
	}
	.hot-product-left .description {
		margin-top: 8px;
	}
	.hot-product-left .description p {
		display: inline-block;
		font-size: 14px!important;
		color: #fff;
		line-height: 24px;
		font-weight: 400;
	}
	.hot-product-right {
		width: 900px;
		height: 600px;
		float: left;
		background: #ffffff;
	}
	.hot-product-right .product {
		border-bottom: 1px solid #ededed;
		border-right: 1px solid #ededed;
		float: left;
		width: 300px;
		height: 300px;
		padding-top: 20px;
		position: relative;
	}
	.hot-product-right .product:hover {
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: box-shadow .3s ease-out;
		position: relative
	}
	.product .card {
		margin-left: 20px;
	}
	.product .card a {
		position: relative;
		z-index: 1;
		display: inline-block;
		vertical-align: middle;
		font-weight: 400;
		color: #999;
		font-size: 12px;
		line-height: 20px;
		padding: 0 7.5px;
		border: 1px solid #f9f9f9;
		border-radius: 4px;
		background: #f9f9f9;
	}
	.product .card a:hover {
		border: 1px solid #ededed;
		background: #ededed;
	}
	.product .title {
		margin-left: 20px;
		text-align: left;
		font-size: 14px;
		color: #181818;
		letter-spacing: .65px;
		line-height: 30px;
		height: 30px;
		margin-top: 13px;
		margin-bottom: 1px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.product .description {
		margin-left: 20px;
		text-align: justify;
		font-size: 14px;
		line-height: 24px;
		white-space: pre-line;
		color: #999;
		letter-spacing: .56px;
		height: 40px;
		margin-right: 20px;
	}
	.product .feature-body {
		margin-top: 7px;
		padding: 0 20px;
		height: 86px;
	}
	.product .feature-body .feature span {
		color: #181818;
		font-size: 12px;
	}
	.product .feature-body .feature .icon {
		color: rgb(255, 106, 0);
		margin-right: 8px;
	}
	.product .money {
		margin-left: 20px;
		margin-top: 16px;
	}
	.product .money span {
		text-align: left;
		font-size: 14px;
		color: #181818;
		letter-spacing: .81px;
		line-height: 24px;
		height: 24px;
	}
	.product .money .symbol {
		color: #ff6a00;
		line-height: 26px;
	}
	.product .money .data {
		text-align: left;
		font-size: 20px;
		color: #ff6a00;
		letter-spacing: .81px;
		line-height: 26px;
		height: 26px;
	}
	.product .money .originMoney {
		display: block;
		font-size: 12px;
		color: #999;
		text-decoration: line-through;
	}
	.product .bottom-button {
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
	.product .bottom-button a {
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
	.product:hover .bottom-button {
		display: inline-block;
	}
</style>
