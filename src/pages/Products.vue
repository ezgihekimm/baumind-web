<template>
	<Header type="white" />
	<ProductsPage />
</template>

<script>
import AOS from 'aos'
import Header from '../components/common/Header'
import ProductsPage from '../components/products/ProductsPage.vue'

export default {
	name: 'Products',
	components: {
    Header,
    ProductsPage
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