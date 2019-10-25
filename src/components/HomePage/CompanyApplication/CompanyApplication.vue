<template>

	<div class="company-application-body">
		<div class="company-application-title">企业应用中心</div>
		<div class="company-application-content">
			<div class="company-application-left">
				<div class="title">
					<p>买软件、选服务</p>
					<p>就上阿里云应用中心</p>
				</div>
				<div class="description">
					<p>财务软件、OA办公软件、智能营销等多款产品免费试用。</p>
					<p>多端小程序应有尽有，20万商家的放心选择，低至9.9元。</p>
				</div>
				<div class="button">立即前往</div>
			</div>
			<div class="company-application-right">
				<div class="application" v-for="(value, key) in companyApplicationInfo" :key="key">
					<div class="card">
						<span v-for="(cardValue, key) in value.card" :key="key">{{ cardValue }}</span>
					</div>
					<div class="title">{{ value.title }}</div>
					<div class="description">{{ value.description }}</div>
					<div class="money" v-if="value.moneyType === 0">
						<span class="symbol">¥</span>
						<span class="data">{{ value.money }}</span>
						<span>起</span>
					</div>
					<div class="money" v-else-if="value.moneyType === 1">
						<span class="symbol">咨询有礼</span>
					</div>
					<div class="money" v-else="value.moneyType === 2">
						<span class="symbol">免费试用</span>
					</div>
					<div class="bottom-button">
						<a class="left-button">更多产品</a>
						<a class="right-button">查看详情</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {companyApplicationInfo} from './CompanyApplication'
  export default {
    name: "CompanyApplication",
    data() {
      return {
        companyApplicationInfo: companyApplicationInfo
      }
    },
    components: {

    },
  }
</script>
<style>
	.company-application-body {
		width: 1200px;
		margin: 0 auto !important;
	}
	.company-application-title {
		color: #000;
		font-size: 24px;
		font-weight: normal;
		display: block;
		margin: 20px 0;
	}
	.company-application-content {
		height: 600px;
	}
	.company-application-left {
		width: 300px;
		height: 600px;
		float: left;
		padding-left: 30px;
		padding-top: 30px;
		padding-right: 30px;
		background: url('../../../assets/HomePage/left-background-1.jpg') center center / cover no-repeat;;
	}
	.company-application-left .title p {
		display: inline-block;
		width: 240px;
		color: #fff;
		font-size: 18px !important;
		height: 28px;
		line-height: 28px;
		font-weight: 700;
	}
	.company-application-left .description {
		margin-top: 8px;
	}
	.company-application-left .description p {
		display: inline-block;
		font-size: 14px!important;
		color: #fff;
		line-height: 24px;
		font-weight: 400;
	}
	.company-application-left .button {
		display: block;
		border: 1px solid #fff;
		width: 128px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		font-size: 14px;
		color: #fff;
		cursor: pointer;
		margin-top: 32px;
		text-decoration: none;
	}
	.company-application-left .button:hover {
		background: #ffffff;
		color: #000000;
	}
	.company-application-right {
		width: 900px;
		height: 600px;
		float: left;
		background: #ffffff;
	}
	.company-application-right .application {
		border-bottom: 1px solid #ededed;
		border-right: 1px solid #ededed;
		float: left;
		width: 300px;
		height: 200px;
		padding-top: 20px;
		position: relative;
	}
	.company-application-right .application:hover {
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: box-shadow .3s ease-out;
		position: relative
	}
	.application .card {
		margin-left: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.application .card span {
		display: inline-block;
		border: 1px solid #d8d8d8;
		border-radius: 4px;
		height: 18px;
		line-height: 16px;
		padding: 1px 6px;
		text-align: center;
		vertical-align: center;
		font-size: 12px;
		color: #999;
		letter-spacing: .33px;
		margin-right: 8px;
	}
	.application .title {
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
	.application .description {
		margin-left: 20px;
		text-align: justify;
		line-height: 18px;
		font-size: 12px;
		white-space: pre-line;
		color: #999;
		letter-spacing: .56px;
		height: 54px;
		margin-right: 20px;
	}
	.application .money {
		margin-left: 20px;
		margin-top: 16px;
	}
	.application .money span {
		text-align: left;
		font-size: 14px;
		color: #181818;
		letter-spacing: .81px;
		line-height: 24px;
		height: 24px;
	}
	.application .money .symbol {
		color: #ff6a00;
		line-height: 26px;
	}
	.application .money .data {
		text-align: left;
		font-size: 20px;
		color: #ff6a00;
		letter-spacing: .81px;
		line-height: 26px;
		height: 26px;
	}
	.application .bottom-button {
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
	.application:hover .bottom-button {
		display: inline-block;
	}
	.application .bottom-button .left-button {
		text-decoration: none;
		float: left;
		text-align: center;
		font-size: 16px;
		letter-spacing: .65px;
		height: 60px;
		width: 50%;
		position: relative;
		z-index: 1;
		background-color: #fff;
		border: 1px solid #ff6a00;
		box-sizing: border-box;
		color: #ff6a00;
	}
	.application .bottom-button .right-button {
		text-decoration: none;
		float: right;
		text-align: center;
		font-size: 16px;
		color: #fff;
		letter-spacing: .65px;
		width: 50%;
		position: relative;
		z-index: 1;
		transition: all .3s;
	}
</style>
