<template>
	<Header type='white' />
	<ProjectPage />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import ProjectPage from '../components/projects/ProjectPage'
import Footer from '../components/common/Footer'

export default {
	components: {
		Header,
		ProjectPage,
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