<template>
	<Header type="transparent" />
	<Slider />
	<ScrollingText />
	<AboutUs />
	<Grid />
	<LatestPatents />
	<ContactHome />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Slider from '../components/home/Slider'
import ScrollingText from '../components/home/ScrollingText'
import AboutUs from '../components/home/AboutUs'
import Grid from '../components/home/Grid'
import LatestPatents from '../components/home/LatestPatents'
import ContactHome from '../components/home/ContactHome.vue'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Slider,
		ScrollingText,
		AboutUs,
		Grid,
		LatestPatents,
		ContactHome,
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