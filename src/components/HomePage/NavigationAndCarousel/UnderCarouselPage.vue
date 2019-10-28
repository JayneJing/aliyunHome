<template>
	<div class="under-carouse-body">
		<div class="under-carouse-left">
			<Row class="under-carouse-info">
				<Col span="8">
					<div class="under-carouse-info-body right-border">
						<a>
							<div class="title">商标自助注册</div>
							<div class="subtitle">极速申报，最快1分钟递交商标局，申请进度透明可查</div>
							<img class="img" src="../../../assets/HomePage/icon1.png">
						</a>
					</div>
				</Col>
				<Col span="8">
					<div class="under-carouse-info-body right-border">
						<a>
							<div class="title">商标自助注册</div>
							<div class="subtitle">极速申报，最快1分钟递交商标局，申请进度透明可查</div>
							<img class="img" src="../../../assets/HomePage/icon1.png">
						</a>
					</div>
				</Col>
				<Col span="8">
					<div class="under-carouse-info-body">
						<a>
							<div class="title">商标自助注册</div>
							<div class="subtitle">极速申报，最快1分钟递交商标局，申请进度透明可查</div>
							<img class="img" src="../../../assets/HomePage/icon1.png">
						</a>
					</div>
				</Col>
			</Row>
		</div>
		<div class="under-carouse-right">
			<div class="under-carouse-info-body-right">
				<img class="img" src="../../../assets/HomePage/photo.png">
				<div class="title">Hi!欢迎来到阿里云</div>
				<div class="button-div">
					<Button class="button-primary" type="primary">登录</Button>
					<Button class="button-default">注册</Button>
				</div>
				<Divider class="divider"/>
				<div>
					<a>全民云计算</a>
					<Divider type="vertical" class="divider-vertical"/>
					<a>免费试用</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  import {carouselInfo} from './NavAndCarouselInfo'
  export default {
    name: "UnderCarouselPage",
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style>
	.under-carouse-body {
		margin-top: 20px;
	}
	.under-carouse-left {
		width: 680px;
		margin-right: 20px;
		display: inline-block;
		vertical-align: top;
	}
	.under-carouse-right {
		width: 240px;
		display: inline-block;
		vertical-align: top;
	}
	.under-carouse-info {
		padding: 20px 0;
		background: #ffffff;
	}
	.under-carouse-info .right-border {
		border-right: 1px solid #eee;
	}
	.under-carouse-info-body {
		height: 244px;
		width: 100%;
		text-align: center;
		padding: 24px;
	}
	.under-carouse-info-body:hover .title{
		color: #ff6a00;
	}
	.under-carouse-info-body .title {
		font-size: 18px;
		color: #181818;
		text-align: center;
		margin-bottom: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.under-carouse-info-body .subtitle {
		font-size: 14px;
		color: #999;
		text-align: center;
		line-height: 25px;
		margin-bottom: 25px;
		height: 51px;
		overflow: hidden;
	}
	.under-carouse-info-body .img {
		width: 70px;
		height: 70px;
		position: absolute;
		left: 50%;
		margin-left: -35px;
	}
	.under-carouse-info-body-right {
		height: 284px;
		width: 100%;
		background: #ffffff;
		text-align: center;
		padding-top: 50px;
	}
	.under-carouse-info-body-right .button-div {
		margin-top: 24px;
	}
	.under-carouse-info-body-right .button-div .button-primary {
		width: 94px;
		margin-right: 6px;
	}
	.under-carouse-info-body-right .button-div .button-default {
		width: 94px;
	}
	.under-carouse-info-body-right .img {
		height: 40px;
		width: 40px;
	}
	.under-carouse-info-body-right .title {
		text-align: center;
		line-height: 20px;
		font-family: PingFangSC-Regular,sans-serif;
		font-size: 14px;
		color: #181818;
		letter-spacing: 0;
		height: 20px;
		margin: 8px auto 0;
		max-width: 90%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.under-carouse-info-body-right .divider {
		margin-top: 50px;
		margin-bottom: 16px;
	}
	.under-carouse-info-body-right a {
		text-decoration: none;
		text-align: center;
		color: #ff6a00;
		display: inline-block;
		cursor: pointer;
		height: 20px;
		line-height: 20px;
	}
	.under-carouse-info-body-right a:hover {
		color: #ff6a00;
	}
	.under-carouse-info-body-right .divider-vertical {
		margin: 0 2px !important;
		background: #999;
	}
</style>
