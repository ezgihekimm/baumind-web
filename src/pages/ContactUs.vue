<template>
	<Header type="white" /> 
	<Map />
	<ContactPage />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Map from '../components/contact-us/Map.vue'
import ContactPage from '../components/contact-us/ContactPage.vue'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Map,
		ContactPage,
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