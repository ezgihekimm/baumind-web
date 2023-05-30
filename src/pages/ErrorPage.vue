<template>
	<Header type="black" />
	<Error />
	<Footer />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import Error from '../components/Error.vue'
import Footer from '../components/common/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Error,
		Footer,
	},
	mounted(){
		AOS.init({once: false})
	},
}
</script>