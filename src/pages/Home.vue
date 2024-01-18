<template>
	<Header type="transparent" />
	<Slider />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Slider from '../components/home/Slider'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Slider,
		Footer,
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