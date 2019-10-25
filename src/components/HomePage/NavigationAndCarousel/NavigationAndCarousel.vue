<template>
	<div class="nav-and-carousel-body">
		<Row class="nav-and-carousel-row">
			<Col span="5" class="navigation-body">
				<NavigationPage />
			</Col>
			<Col span="19" class="carousel-body">
				<CarouselPage />
				<UnderCarouselPage />
			</Col>
		</Row>
	</div>

</template>
<script>
  import {mapState} from 'vuex'
  import CarouselPage from './CarouselPage.vue'
  import UnderCarouselPage from './UnderCarouselPage.vue'
  import NavigationPage from './NavigationPage.vue'
  export default {
    name: "NavigationAndCarousel",
    data() {
      return {
      }
    },
    components: {
      CarouselPage,
      UnderCarouselPage,
      NavigationPage,
    }
  }
</script>
<style>
	.nav-and-carousel-body {
		margin-top: 20px;
	}
	.nav-and-carousel-row {
		width: 1200px;
		margin: 0 auto !important;
	}
	.navigation-body {
		padding-right: 10px;
	}
	.carousel-body {
		padding-left: 10px;
	}
</style>
