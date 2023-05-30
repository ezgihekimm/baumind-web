<template>
	<Header type="black" />
	<ElectroOptic />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import ElectroOptic from '../components/projects/ElectroOptic.vue'
import Footer from '../components/common/Footer'


export default {
	name: 'App',
	components: {
		Header,
		ElectroOptic,
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