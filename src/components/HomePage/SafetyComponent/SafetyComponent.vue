<template>
	<div class="safety-component">
		<div class="safety-component-body">
			<div class="safety-top">
				<div class="safety-title">
					<div class="title">安全合规,</div>
					<div class="title">让您的业务轻松上云</div>
					<div style="height: 22px">
						<a>了解阿里云安全<Icon type="md-arrow-forward" /></a>
					</div>
				</div>
				<div class="safety-top-right">
					<div class="safety-data">
						<a>
							<div class="safety-quantity">40%</div>
							<div class="safety-center"></div>
							<div class="safety-effect">累计防护全国网站</div>
						</a>
					</div>
					<div class="safety-data">
						<a>
							<div class="safety-quantity">50 亿</div>
							<div class="safety-center"></div>
							<div class="safety-effect">每天成功抵御50亿次攻击</div>
						</a>
					</div>
					<div class="safety-data">
						<a>
							<div class="safety-quantity">50%</div>
							<div class="safety-center"></div>
							<div class="safety-effect">防御全国50%的大流量DDoS攻击</div>
						</a>
					</div>
					<div class="safety-data">
						<a>
							<div class="safety-quantity">734 万</div>
							<div class="safety-center"></div>
							<div class="safety-effect">每年帮助用户修复约734万漏洞</div>
						</a>
					</div>
				</div>
			</div>
			<div class="safety-bottom">
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-1.jpg" >
					<span>CSA STAR</span>
					<span>金牌认证</span>
				</div>
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-2.jpg" >
					<span>ISO 22301</span>
					<span>业务连续性管理体系认证</span>
				</div>
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-3.jpg" >
					<span>ISO 27001</span>
					<span>信息安全管理体系认证</span>
				</div>
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-4.jpg" >
					<span>公安部</span>
					<span>网络安全等级保护</span>
				</div>
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-5.jpg" >
					<span>中央网信办</span>
					<span>云服务安全审查</span>
				</div>
				<div class="safety-logo">
					<img src="../../../assets/HomePage/safety-6.jpg" >
					<span>工信部</span>
					<span>云计算服务能力评估</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "TopNav",
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
	.safety-component {
		margin-top: 30px;
		width: 100%;
		background: #fff;
	}
	.safety-component-body {
		width: 1200px;
		margin: 0 auto !important;
		height: 417px;
	}
	.safety-top {
		width: 100%;
		padding: 60px 0 30px;
		clear: both;
		overflow: hidden;
		border-bottom: 1px solid #ededed;
	}
	.safety-title {
		display: inline-block;
		text-align: left;
		font-size: 24px;
		color: #181818;
		letter-spacing: .5px;
		line-height: 42px;
		width: 221px;
		height: 84px;
		vertical-align: top;
	}
	.safety-title .title {
		text-align: left;
		font-size: 24px;
		color: #181818;
		letter-spacing: .5px;
		line-height: 42px;
	}
	.safety-title a {
		text-decoration: none;
		text-align: left;
		line-height: 22px;
		font-size: 16px;
		color: #fe6a00;
		margin-top: 25px;
	}
	.safety-top-right {
		display: inline-block;
		vertical-align: top;
		margin-left: 79px;
	}
	.safety-data {
		display: inline-block;
		margin-right: 48px;
	}
	.safety-quantity {
		text-align: left;
		line-height: 48px;
		font-size: 36px;
		color: #181818;
		letter-spacing: 1.12px;
		height: 48px;
	}
	.safety-center {
		background: #fe6a00;
		width: 40px;
		height: 3px;
		margin: 10px 0;
	}
	.safety-effect {
		text-align: left;
		line-height: 38px;
		opacity: .6;
		font-size: 14px;
		color: gray;
		letter-spacing: .44px;
		height: 38px;
	}
	.safety-data:hover .safety-effect {
		color: #ff6a00;
	}
	.safety-bottom {
		width: 100%;
		padding-top: 45px;
		display: flex;
		justify-content: space-between;
	}
	.safety-logo {
		text-align: center;
		display: block;
		cursor: pointer;
	}
	.safety-logo img {
		max-width: 60px;
		max-height: 56px;
		margin: auto;
		margin-bottom: 15px;
	}
	.safety-logo span {
		display: block;
		text-align: center;
		line-height: 24px;
		font-size: 14px;
		color: gray;
	}
	.safety-logo:hover span {
		color: #ff6a00;
	}
</style>
