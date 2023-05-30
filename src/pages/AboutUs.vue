<template>
	<Header type='white' />
	<Title type="light" :tag="$t('aboutus.tag')" :title="$t('aboutus.title')" framed />
	<WhoAreWe/>
	<OurAims type="light" :title="$t('aboutus.aims')" :head="$t('aboutus.tag')"  />
	<Patent />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Title from '../components/common/Title'
import WhoAreWe from '../components/about-us/WhoAreWe'
import OurAims from '../components/about-us/OurAims'
import Patent from '../components/about-us/Patent'
import Footer from '../components/common/Footer'

export default {
	name: 'AboutUs',
	components: {
		Header,
		Title,
		WhoAreWe,
		OurAims,
		Patent,
		Footer,
	},
	mounted(){
		AOS.init({once: true})
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