<template>
	<Header type="black" />
	<CoLighting />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import CoLighting from '../components/products/CoLighting'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		CoLighting,
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