<template>
	<div class="top-nav">
		<div class="top-nav-header">
			<a class="top-nav-logo">
				<img class="top-nav-logo-img" src="../../assets/top-nav-logo.png" alt="">
			</a>
			<div class="top-nav-ability-input">
				<div class="table">
					<div :class="{'table-button': true, 'table-button-clicked': clickTableButtonId === 0}" @click="clickTableButton(0)">全部</div>
					<div :class="{'table-button': true, 'table-button-clicked': clickTableButtonId === 1}" @click="clickTableButton(1)">域名</div>
					<div :class="{'table-button': true, 'table-button-clicked': clickTableButtonId === 2}" @click="clickTableButton(2)">商标</div>
					<div :class="{'table-button': true, 'table-button-clicked': clickTableButtonId === 3}" @click="clickTableButton(3)">公司</div>
				</div>
				<Input class="table-input" search enter-button="搜索" placeholder="阿里云双十一狂欢节" />
				<div class="hot-key">
					<div class="item">云服务器 ECS</div>
					<div class="item">云数据库 RDS MySQL版</div>
					<div class="item">企业邮箱</div>
					<div class="item">商标服务</div>
					<div class="item">对象存储 OSS</div>
				</div>
			</div>
			<div class="top-nav-ability">
				<a class="top-nav-ability-title"><Icon type="ios-cart-outline" size="20" style="margin-right: 4px"/>购物车</a>
				<a class="top-nav-ability-title">文档</a>
				<a class="top-nav-ability-title">备案</a>
				<a class="top-nav-ability-title">控制台</a>
				<a class="top-nav-ability-title">登录</a>
				<Button size="large" class="top-nav-ability-button"  type="primary">免费注册</Button>
			</div>
		</div>


		<div class="top-nav-menu">
			<div class="top-nav-menu-ul">
				<a class="top-nav-menu-li" v-for="(value, key) in TopNavTitle" :key="key">
					{{value}}
				</a>
				<a class="top-nav-menu-gif">
					<img class="top-nav-menu-gif-img" src="../../assets/top-nav-phone.gif" alt="">
				</a>
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
        clickTableButtonId: 0
      }
    },
    created(){
      this.getTopNavTitle()
    },
    mounted(){
    },
    computed: {
      ...mapState({
        TopNavTitle: state => state.HomePage.TopNavTitle.title,
      })
    },
    methods: {
      getTopNavTitle() {
        this.$store.dispatch('getTopNavTitle')
      },
      clickTableButton($id) {
        this.clickTableButtonId = $id
      }
    }
  }
</script>
<style>
	.top-nav {
		width:100%;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
		box-sizing: border-box;
		padding-top: 30px;
		position: relative;
		z-index: 1000;
		display: block;
	}
	.top-nav-header {
		width: 1200px;
		margin: 0 auto;
		height: 70px;
	}
	.top-nav-logo {
		display: inline-block;
		width: 119px;
		height: 27px;
		margin-top: 2px;
	}
	.top-nav-logo-img {
		width: 119px;
		height: 27px;
		margin-top: 6.5px;
	}
	.top-nav-ability {
		position: relative;
		float: right;
		line-height: 40px;
		height: 40px;
		vertical-align: middle;
	}
	.top-nav-ability-title {
		margin-right: 20px;
		color: #181818;
		font-size: 14px;
	}
	.top-nav-ability-title:hover {
		color: #ff6a00;
	}
	.top-nav-ability-button {
		width: 120px;
		height: 36px !important;
	}
	.top-nav-menu {
		width: 1200px;
		margin: 0 auto;
		height: 50px;
	}
	.top-nav-menu-ul {
		height: 100%;
	}
	.top-nav-menu-li {
		padding: 0 16px;
		color: #181818;
		font-size: 14px;
		cursor: pointer;
		display: inline-block;
		text-decoration: none;
		height: 100%;
		line-height: 50px;
	}
	.top-nav-menu-li:first-of-type {
		padding-left: 0;
	}
	.top-nav-menu-li:hover {
		color: #ff6a00;
	}
	.top-nav-menu-gif {
		width: 200px;
		height: 50px;
	}
	.top-nav-menu-gif-img {
		display: block;
		height: 100%;
		float: right;
	}
	.top-nav-ability-input {
		float: left;
		width: 450px;
		position: absolute;
		left: 500px;
		top: 10px;
	}
	.top-nav-ability-input .table-input input{
		border: 2px solid #ff6a00;
	}
	.ivu-input-group {
		top: 0 !important;
	}
	.top-nav-ability-input .table .table-button {
		display: inline-block;
		cursor: pointer;
		height: 100%;
		text-align: center;
		line-height: 24px;
		float: left;
		font-size: 12px;
		padding: 0 9px;
	}
	.top-nav-ability-input .table .table-button-clicked {
		background: #ff6a00;
		color: #fff;
	}
	.top-nav-ability-input .hot-key {
		width: 100%;
		height: 28px;
		line-height: 28px;
		position: absolute;
		top: 60px;
		left: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.top-nav-ability-input .hot-key .item {
		text-align: left;
		line-height: 14px;
		font-size: 12px;
		color: #999;
		display: inline-block;
		border-right: 1px solid #999;
		padding: 0 5px;
		padding-right: 4px;
		cursor: pointer;
	}
	.top-nav-ability-input .hot-key .item:first-child {
		padding-left: 0
	}
	.top-nav-ability-input .hot-key .item:last-child {
		border-right: 0 solid #999;
	}
</style>
