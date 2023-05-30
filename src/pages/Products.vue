<template>
	<Header type="transparentBlack" />
	<FullPageSlider />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import FullPageSlider from '../components/products/FullPageSlider'

export default {
	name: 'Products',
	components: {
		Header,
		FullPageSlider,
	},
	mounted(){
		AOS.init({once: false})
	},
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = this.$t('home.title') || 'BAU Innovation and Consultancy Inc.';
			}
		},
	}
}
</script>