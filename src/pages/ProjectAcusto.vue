<template>
	<Header type="black" />
	<Acusto />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Acusto from '../components/projects/Acusto'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Acusto,
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