<template>
	<Header type="black" />
	<CoLink />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import CoLink from '../components/products/CoLink'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		CoLink,
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