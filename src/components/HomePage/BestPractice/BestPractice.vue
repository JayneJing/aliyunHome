<template>
	<div class="best-practice-body">
		<div class="best-practice-content">
			<div class="best-practice-left">
				<div class="title">
					<p>最佳实践</p>
				</div>
				<div class="description">
					<p>基于众多客户上云的成功案例萃取而成的最优化企业上云指导。</p>
				</div>
			</div>
			<div class="best-practice-right">
				<div class="practice" v-for="(value, key) in BestPracticeInfo" :key="key">
					<div class="category">
						<img class="logo" :src="require('../../../assets/HomePage/' + value.logo)" >
						<div class="text">
							<span class="category-name">{{ value.category }}</span>
							<Divider class="divider-vertical" type="vertical" />
							<span class="subtitle">{{ value.subtitle }}</span>
						</div>
					</div>
					<a class="info">
						<div class="title">{{ value.title }}</div>
						<div class="description">{{ value.description }}</div>
					</a>
					<div class="card">
						<a v-for="(cardValue, key) in value.card" :key="key">{{ cardValue }}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {BestPracticeInfo} from './BestPractice'
  export default {
    name: "BestPractice",
    data() {
      return {
        BestPracticeInfo: BestPracticeInfo
      }
    },
    components: {
    },
  }
</script>
<style>
	.best-practice-body {
		width: 1200px;
		margin: 0 auto !important;
	}
	.best-practice-content {
		height: 258px;
		margin-top: 20px;
	}
	.best-practice-left {
		width: 300px;
		height: 258px;
		float: left;
		padding-left: 30px;
		padding-top: 30px;
		padding-right: 30px;
		background: url('../../../assets/HomePage/left-background-4.jpg') center center / cover no-repeat;;
	}
	.best-practice-left .title p {
		display: inline-block;
		width: 240px;
		color: #fff;
		font-size: 18px !important;
		height: 28px;
		line-height: 28px;
		font-weight: 700;
	}
	.best-practice-left .description {
		margin-top: 8px;
	}
	.best-practice-left .description p {
		display: inline-block;
		font-size: 14px!important;
		color: #fff;
		line-height: 24px;
		font-weight: 400;
	}
	.best-practice-right {
		width: 900px;
		height: 258px;
		float: left;
		background: #ffffff;
	}
	.best-practice-right .practice {
		border-bottom: 1px solid #ededed;
		border-right: 1px solid #ededed;
		float: left;
		width: 300px;
		height: 258px;
		position: relative;
	}
	.best-practice-right .practice:hover {
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: box-shadow .3s ease-out;
		position: relative
	}
	.practice .category {
		display: block;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
		height: 88px;
	}
	.practice .category .logo {
		width: 48px;
		vertical-align: middle;
		margin-right: 12px;
	}
	.practice .category .text {
		display: inline-block;
		text-align: left;
		letter-spacing: .81px;
		vertical-align: middle;
		max-width: 75%;
	}
	.practice .category .text .category-name {
		display: inline-block;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 14px;
	}
	.practice .category .text .category-name:hover {
		color: #ff6a00;
	}
	.practice .category .text .divider-vertical {
		margin: 0 3px;
		color: #999;
		background: #999;
	}
	.practice .category .text .subtitle {
		color: #999;
		font-size: 14px;
		width: 120px;
		line-height: 20px;
	}
	.practice .divider {
		margin: 0 20px !important;
	}
	.practice .info {
		display: block;
		padding: 20px 0 22px 0 ;
		margin: 0 15px 0 20px;
		height: 130px;
		text-decoration: none;
		overflow: hidden;
		position: relative;
		border-top: 1px solid #eee;
	}
	.practice .info .title {
		text-decoration: none;
		display: block;
		text-align: left;
		font-size: 14px;
		color: #181818;
		letter-spacing: .65px;
		line-height: 30px;
		height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.practice:hover .info .title {
		color: #ff6a00;
	}
	.practice .info .description {
		text-decoration: none;
		line-height: 18px;
		font-size: 12px;
		color: #999;
		text-align: justify;
		height: 54px;
	}
	.practice .card {
		margin-left: 20px;
	}
	.practice .card a {
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
	.practice .card a:hover {
		border: 1px solid #ededed;
		background: #ededed;
	}
</style>
