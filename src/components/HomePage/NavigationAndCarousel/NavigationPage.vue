<template>
	<div class="navigation-body">
		<div class="navigation-border">
			<span>精选爆款</span>
			<div class="menu-ul">
				<div
						class="menu-li"
				     v-for="(value, key) in navigationInfo"
				     :key="key"
				     @mouseover="overList(key)"
				     @mouseleave="leaveList()">
					<div class="menu-title">
						<a>
							{{ value.title }}
							<Icon type="ios-arrow-forward" />
						</a>
					</div>
					<div class="menu-subTitle">
						<a
								:style="subTitlekey === value.subTitle.length - 1 ? 'border-right:0' : ''"
								v-for="(subTitleValue, subTitlekey) in value.subTitle"
								:key="subTitlekey">
							{{ subTitleValue }}
						</a>
					</div>
				</div>
			</div>
			<a class="check-all">查看全部</a>
		</div>
		<div
				class="navigation-menu-content"
				v-show="mouseListOver || mouseSubtitleOver"
				@mouseover="overSubtitle(true)"
				@mouseleave="overSubtitle(false)"
		>
			<div class="menu-subtitle">
				<div class="box">
					<a class="title">全部产品</a>
					<div class="list">
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
						<a>云服务器ECS</a>
					</div>
				</div>
				<div class="active">
					<a class="title">快速入口</a>
					<div class="list">
						<div class="item">
							<span>高配云服务器免费试用</span>
							<a>了解详情</a>
							<img src="../../../assets/HomePage/navigation-activity-1.png" >
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  import { navigationInfo } from './NavAndCarouselInfo.js'
  export default {
    name: "NavigationPage",
    data() {
      return {
        navigationInfo:navigationInfo,
	      mouseListOver: false,
	      mouseListKey: '',
	      mouseSubtitleOver: false,
      }
    },
    methods: {
      overList(key) {
        this.mouseListKey = key
	      this.mouseListOver = true
      },
      leaveList() {
        this.mouseListOver = false
      },
      overSubtitle(value) {
        this.mouseSubtitleOver = value
      }
    }
  }
</script>
<style>
	.navigation-body{
		height: 624px;
	}
	.navigation-border span {
		display: block;
		height: 30px;
		background: #ff6a00;
		font-size: 14px;
		color: #fff;
		letter-spacing: 1px;
		text-align: center;
		line-height: 30px;
	}
	.navigation-border .check-all {
		display: block;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 13px;
		color: #ff6a00;
		position: absolute;
		left: 0;
		bottom: 0;
		cursor: pointer;
		text-decoration: none;
		background: #ffffff;
		width: 230px;
	}
	.navigation-border .menu-ul {
		box-sizing: border-box;
		height: 554px;
		position: relative;
		background: white;
	}
	.navigation-border .menu-ul .menu-li {
		padding: 15px 16px 0;
	}
	.navigation-border .menu-ul .menu-li:hover {
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: box-shadow .13s ease-in-out
	}
	.navigation-border .menu-ul .menu-li:hover .menu-title a{
		color: #ff6a00!important;
		transition: color .13s ease-in-out
	}
	.navigation-border .menu-ul .menu-li:last-child .menu-subTitle,
	.navigation-border .menu-ul .menu-li:hover .menu-subTitle{
		border-bottom: 0 solid #eee;
	}
	.menu-li .menu-title a {
		display: block;
		font-size: 14px;
		line-height: 16px;
		margin-bottom: 2px;
		color: #181818!important;
		text-decoration: none!important;
	}
	.menu-li .menu-subTitle {
		width: 100%;
		border-bottom: 1px solid #eee;
		padding: 6px 0;
		height: 35px;
		overflow: hidden;
	}
	.menu-li .menu-subTitle a {
		padding-right: 6px;
		margin: 4px 5px 4px 0;
		box-sizing: border-box;
		font-size: 13px;
		color: #999;
		text-decoration: none;
		display: inline-block;
		max-width: 100%;
		border-right: 1px solid #eee;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.navigation-menu-content {
		width: 700px;
		height: 624px;
		position: absolute;
		left: 230px;
		top: 0;
		background: #fff;
		z-index: 101;
		box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
		transition: opacity .13s ease-in-out,box-shadow .13s ease-in-out;
	}
	.navigation-menu-content .menu-subtitle {
		width: 100%;
		height: 100%;
		padding: 30px 20px 0;
		box-sizing: border-box;
		overflow-y: auto;
		position: absolute;
		top: 0;
		left: 0;
	}
	.navigation-menu-content .menu-subtitle .box {
		columns: 206px 1;
		-webkit-columns: 206px 1;
		-moz-columns: 206px 1;
		width: 434px;
		margin-right: 15px;
		float: left;
		padding-bottom: 20px;
	}
	.navigation-menu-content .menu-subtitle .box .title {
		display: block;
		font-size: 14px;
		color: #181818;
		font-weight: 600;
		margin-bottom: 15px;
		text-decoration: none;
		height: 16px;
		line-height: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.navigation-menu-content .menu-subtitle .box .list {
		width: 100%;
	}
	.navigation-menu-content .menu-subtitle .box .list a {
		width: 50%;
		float: left;
		text-decoration: none;
		font-size: 13px;
		display: inline-block;
		color: #999;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 27px;
		vertical-align: middle;
	}
	.navigation-menu-content .menu-subtitle .box .list a:hover {
		color: #ff6a00;
	}
	.navigation-menu-content .menu-subtitle .active {
		width: 206px;
		height: 467px;
		box-sizing: content-box;
		float: left;
	}
	.navigation-menu-content .menu-subtitle .active .title {
		display: block;
		font-size: 14px;
		color: #181818;
		font-weight: 600;
		margin-bottom: 15px;
		text-decoration: none;
		height: 16px;
		line-height: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.navigation-menu-content .menu-subtitle .active .list .item{
		border: 1px solid #ededed;
		width: 206px;
		height: 130px;
		margin-bottom: 20px;
		padding: 20px;
		box-sizing: border-box;
		position: relative;
	}
	.navigation-menu-content .menu-subtitle .active .list .item span {
		font-size: 14px;
		color: #999;
		display: block;
	}
	.navigation-menu-content .menu-subtitle .active .list .item a {
		font-size: 14px;
		color: #ff6a00;
		line-height: 35px;
		cursor: pointer;
		text-decoration: none;
	}
	.navigation-menu-content .menu-subtitle .active .list .item img {
		width: 64px;
		height: 64px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
