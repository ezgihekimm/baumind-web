<template>
	<Header type="transparentBlack" />
	<ComingSoonComponent :tag="$t('comingsoon.tag')" :title="$t('comingsoon.title')" type="light" />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import ComingSoonComponent from '../components/ComingSoonComponent'
import Footer from '../components/common/Footer'

export default {
	name: 'ComingSoon',
	components: {
		Header,
		ComingSoonComponent,
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