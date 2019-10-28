<template>
	<div class="footer-component">
		<div class="footer-div">
			<div class="footer-top">
				<div class="consult">
					<div class="consult-text">售前咨询热线</div>
					<div class="consult-text-number">95187转1</div>
					<div class="consult-text">
						<a>专业技术咨询</a>
					</div>
					<div class="consult-text">
						<a>全方位产品解读</a>
					</div>
					<div class="consult-text">
						<a>成熟解决方案</a>
					</div>
					<div class="consult-text">
						<a>成功客户案例分享</a>
					</div>
				</div>
				<div class="main-server">
					<div class="title">支持与服务</div>
					<div class="text">联系我们</div>
					<div class="text">支持计划</div>
					<div class="text">新手学堂</div>
					<div class="text">帮助文档</div>
					<div class="text">自助工具</div>
					<div class="text">咨询与设计</div>
					<div class="text">迁移与部署</div>
					<div class="text">运维与管理</div>
					<div class="text">优化与提升</div>
					<div class="text">公告</div>
					<div class="text">提交建议</div>
					<div class="text">服务案例</div>
					<div class="text">专家分享</div>
				</div>
				<div class="main-server">
					<div class="title">支持与服务</div>
					<div class="text">联系我们</div>
					<div class="text">支持计划</div>
					<div class="text">新手学堂</div>
					<div class="text">帮助文档</div>
					<div class="text">自助工具</div>
					<div class="text">咨询与设计</div>
					<div class="text">迁移与部署</div>
					<div class="text">运维与管理</div>
				</div>
				<div class="main-server">
					<div class="title">支持与服务</div>
					<div class="text">联系我们</div>
					<div class="text">支持计划</div>
					<div class="text">新手学堂</div>
					<div class="text">帮助文档</div>
					<div class="text">自助工具</div>
					<div class="text">咨询与设计</div>
					<div class="text">迁移与部署</div>
					<div class="text">运维与管理</div>
					<div class="text">优化与提升</div>
					<div class="text">公告</div>
					<div class="text">提交建议</div>
				</div>
				<div class="main-server">
					<div class="title">支持与服务</div>
					<div class="text">联系我们</div>
					<div class="text">支持计划</div>
					<div class="text">新手学堂</div>
					<div class="text">帮助文档</div>
					<div class="text">自助工具</div>
					<div class="text">咨询与设计</div>
					<div class="text">迁移与部署</div>
					<div class="text">运维与管理</div>
					<div class="text">优化与提升</div>
					<div class="text">公告</div>
					<div class="text">提交建议</div>
					<div class="text">服务案例</div>
					<div class="text">专家分享</div>
				</div>
			</div>
			<div class="footer-product">
				<div class="list">
					<div class="title">热门产品</div>
					<div class="item">
						<a>免费套餐</a>
						<a>云数据库RDS</a>
						<a>云存储OSS</a>
						<a>NAT网关</a>
						<a>负载均衡</a>
						<a>域名注册</a>
						<a>企业应用中心</a>
						<a>大数据</a>
						<a>云计算</a>
					</div>
				</div>
				<div class="list">
					<div class="title">热门产品</div>
					<div class="item">
						<a>免费套餐</a>
						<a>云数据库RDS</a>
						<a>云存储OSS</a>
						<a>NAT网关</a>
						<a>负载均衡</a>
						<a>域名注册</a>
					</div>
				</div>
				<div class="list">
					<div class="title">热门产品</div>
					<div class="item">
						<a>免费套餐</a>
						<a>云数据库RDS</a>
						<a>云存储OSS</a>
						<a>NAT网关</a>
						<a>负载均衡</a>
						<a>域名注册</a>
						<a>企业应用中心</a>
					</div>
				</div>
			</div>
			<div class="footer-about">
				<div class="big-text">
					<a>关于我们</a>
					<a>法律声明及隐私权政策</a>
					<a>廉正举报</a>
					<a>联系我们</a>
					<a>加入阿里云</a>
				</div>
				<div class="small-text">
					<a>阿里巴巴集团</a>
					<a>淘宝网</a>
					<a>天猫</a>
					<a>聚划算</a>
				</div>
				<div class="copyright">© 2009-2019 Aliyun.com 版权所有 ICP证：浙B2-20080101</div>
			</div>
		</div>

	</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: "Footer",
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
	.footer-component {
		background-color: rgb(24, 24, 24);
	}
	.footer-div {
		margin-right: auto;
		margin-left: auto;
		width: 1200px;
		height: auto;
		padding: 35px 0 30px;
		box-sizing: border-box;
	}
	.footer-top {
		padding-bottom: 16px;
		border-bottom: 1px solid #4b5054;
	}
	.footer-top .consult {
		width: 170px;
		height: 324px;
		border-right: 1px solid #4b5054;
		display: inline-block;
		margin-right: 100px;
		vertical-align: top;
	}
	.consult-text {
		font-size: 16px;
		color: #fff;
	}
	.consult-text-number {
		font-size: 20px;
		color: #fff;
	}
	.consult-text a {
		text-align: left;
		line-height: 30px;
		font-size: 14px;
		color: #9b9ea0;
		letter-spacing: .44px;
		cursor: pointer;
	}
	.consult-text a:hover {
		color: #ff6a00;
	}
	.main-server {
		vertical-align: top;
		display: inline-block;
		width: 204px;
	}
	.main-server .title {
		display: block;
		text-align: left;
		line-height: 18px;
		font-size: 14px;
		color: #d7d8d9;
		letter-spacing: .44px;
		margin-bottom: 16px;
	}
	.main-server .text {
		display: block;
		text-align: left;
		line-height: 22px;
		font-size: 12px;
		color: #9b9ea0;
		letter-spacing: .43px;
		text-decoration: none;
		transition: color .3s;
		cursor: pointer;
	}
	.main-server .text:hover {
		color: #ff6a00;
	}
	.footer-product {
		width: 100%;
		height: auto;
		padding: 15px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #4b5054;
	}
	.footer-product .list {
		position: relative;
		height: auto;
	}
	.footer-product .list .title {
		display: inline-block;
		line-height: 25px;
		font-size: 12px;
		color: #9b9ea0;
		letter-spacing: .43px;
		padding-right: 20px;
		font-weight: 700;
	}
	.footer-product .list .item {
		display: inline-block;
	}
	.footer-product .list .item a {
		display: inline-block;
		line-height: 25px;
		font-size: 12px;
		color: #73777a;
		width: 113px;
	}
	.footer-product .list .item a:hover {
		color: #ff6a00;
	}
	.footer-about {
		width: 100%;
		padding-top: 10px;
	}
	.footer-about .big-text {
		width: 100%;
		height: auto;
		clear: both;
	}
	.footer-about .big-text a {
		text-decoration: none;
		text-align: left;
		line-height: 30px;
		font-size: 16px;
		color: #9b9ea0;
		letter-spacing: .5px;
		display: inline-block;
		margin-right: 35px;
	}
	.footer-about .big-text a:hover {
		color: #ff6a00;
	}
	.footer-about .small-text {
		width: 100%;
		height: auto;
	}
	.footer-about .small-text a {
		text-align: left;
		line-height: 30px;
		font-size: 14px;
		color: #73777a;
		text-decoration: none;
		letter-spacing: .5px;
		display: inline-block;
		margin-right: 10px;
	}
	.footer-about .small-text a:hover {
		color: #ff6a00;
	}
	.footer-about .copyright {
		text-align: left;
		line-height: 30px;
		font-size: 14px;
		color: #73777a;
		letter-spacing: .5px;
	}
</style>
